// CineVault - Curated Movie & Trailer Taxonomy Engine
// Features: Horizontal Hover Ribbon, 5-Across Grid, Infinite Scroll, Randomized Mix, Single-Admin Mode, Multi-View Mode Switcher

(function () {
  'use strict';

  const DATA = window.CINEVAULT_DATA || window.ONLYTRAILERS_DATA;

  // --- STATE MANAGEMENT ---
  const state = {
    selectedGenreId: 'all',
    activeTags: new Set(),
    selectedDirector: null,
    searchQuery: '',
    sortBy: 'random', // Default to random discovery
    viewMode: localStorage.getItem('cinevault_view_mode') || 'standard', // 'standard' | 'compact' | 'rows'
    currentPage: 1,
    pageSize: (localStorage.getItem('cinevault_view_mode') === 'compact') ? 42 : 30,
    currentFilteredMovies: [],
    shuffledMovieIds: [],
    currentTrailerMovie: null,
    openSections: new Set(),
    // Admin state
    isAdmin: localStorage.getItem('cinevault_admin') === 'true',
    deletedIds: new Set(JSON.parse(localStorage.getItem('cinevault_deleted') || '[]')),
    reimportIds: new Set(JSON.parse(localStorage.getItem('cinevault_reimport') || '[]'))
  };

  // --- DOM ELEMENTS ---
  // Ribbon & Filter elements
  const filterRibbonWrapper = document.getElementById('filter-ribbon-wrapper');
  const filterRibbonTrigger = document.getElementById('filter-ribbon-trigger');
  const filterRibbonPanel = document.getElementById('filter-ribbon-panel');
  const ribbonBackdrop = document.getElementById('ribbon-backdrop');
  const activeFilterCountBadge = document.getElementById('active-filter-count-badge');
  const genrePillsContainer = document.getElementById('genre-pills-container');
  const taxonomyCategoriesContainer = document.getElementById('taxonomy-categories-container');
  const activeFiltersBox = document.getElementById('active-filters-box');
  const activeTagsCloud = document.getElementById('active-tags-cloud');
  const btnClearFilters = document.getElementById('btn-clear-filters');

  // Feed & Navigation elements
  const movieGrid = document.getElementById('movie-grid');
  const feedTitleText = document.getElementById('feed-title-text');
  const feedCountText = document.getElementById('feed-count-text');
  const searchInput = document.getElementById('search-input');
  const sortSelect = document.getElementById('sort-select');
  const btnShuffle = document.getElementById('btn-shuffle');
  const logoLink = document.getElementById('logo-link');

  // Infinite Scroll elements
  const scrollSentinel = document.getElementById('scroll-sentinel');
  const infiniteLoadingSpinner = document.getElementById('infinite-loading-spinner');
  const catalogEndMessage = document.getElementById('catalog-end-message');

  // Admin Elements
  const adminBadge = document.getElementById('admin-badge');
  const btnAdminToggle = document.getElementById('btn-admin-toggle');
  const adminBtnLabel = document.getElementById('admin-btn-label');
  const adminIcon = document.getElementById('admin-icon');
  const adminModal = document.getElementById('admin-modal');
  const adminModalClose = document.getElementById('admin-modal-close');
  const btnAdminCancel = document.getElementById('btn-admin-cancel');
  const adminAuthForm = document.getElementById('admin-auth-form');
  const adminPassphraseInput = document.getElementById('admin-passphrase-input');
  const adminAuthError = document.getElementById('admin-auth-error');

  // Trailer Lightbox Modal
  const trailerModal = document.getElementById('trailer-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalIframe = document.getElementById('modal-iframe');
  const videoWrapper = document.getElementById('video-wrapper');
  const videoClickOverlay = document.getElementById('video-click-overlay');
  const videoFullscreenBtn = document.getElementById('video-fullscreen-btn');
  const videoGestureIndicator = document.getElementById('video-gesture-indicator');
  const modalMovieTitle = document.getElementById('modal-movie-title');
  const modalMovieMeta = document.getElementById('modal-movie-meta');
  const modalMovieSynopsis = document.getElementById('modal-movie-synopsis');
  const modalMovieGenres = document.getElementById('modal-movie-genres');
  const modalMovieTags = document.getElementById('modal-movie-tags');

  // Taxonomy Engine Modal
  const btnTagManager = document.getElementById('btn-tag-manager');
  const taxonomyModal = document.getElementById('taxonomy-modal');
  const taxonomyModalClose = document.getElementById('taxonomy-modal-close');
  const managerAllTags = document.getElementById('manager-all-tags');
  const newTagInput = document.getElementById('new-tag-input');
  const btnAddTag = document.getElementById('btn-add-tag');

  // Add Movie Modal
  const btnAddMovie = document.getElementById('btn-add-movie');
  const addMovieModal = document.getElementById('add-movie-modal');
  const addMovieModalClose = document.getElementById('add-movie-modal-close');
  const addMovieForm = document.getElementById('add-movie-form');
  const formGenreSelect = document.getElementById('form-genre');

  let infiniteObserver = null;
  let isAppending = false;

  // --- INITIALIZATION ---
  function init() {
    initViewMode();
    shuffleCatalog();
    populateFormGenres();
    renderGenrePills();
    renderTaxonomySidebar();
    updateAdminUI();
    renderMovieFeed(true);
    setupInfiniteScroll();
    setupEventListeners();
  }

  // --- VIEW MODE MANAGEMENT ---
  function initViewMode() {
    if (!movieGrid) return;
    movieGrid.classList.remove('view-compact', 'view-rows');
    if (state.viewMode === 'compact') {
      movieGrid.classList.add('view-compact');
      state.pageSize = 42;
    } else if (state.viewMode === 'rows') {
      movieGrid.classList.add('view-rows');
      state.pageSize = 30;
    } else {
      state.pageSize = 30;
    }

    document.querySelectorAll('.view-toggle-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-view') === state.viewMode);
    });
  }

  function setViewMode(mode) {
    if (state.viewMode === mode) return;
    state.viewMode = mode;
    localStorage.setItem('cinevault_view_mode', mode);

    initViewMode();
    renderMovieFeed(true);
  }

  // --- CATALOG RANDOM SHUFFLE ---
  function shuffleCatalog() {
    const ids = DATA.movies.map(m => m.id);
    for (let i = ids.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [ids[i], ids[j]] = [ids[j], ids[i]];
    }
    state.shuffledMovieIds = ids;
  }

  // --- POPULATE GENRE FORM SELECT ---
  function populateFormGenres() {
    if (!formGenreSelect) return;
    formGenreSelect.innerHTML = DATA.genres.map(g =>
      `<option value="${g.id}">${g.name}</option>`
    ).join('');
  }

  // --- RENDER GENRE PILLS IN HORIZONTAL RIBBON ---
  function renderGenrePills() {
    if (!genrePillsContainer) return;
    genrePillsContainer.innerHTML = '';

    // 'All Featured Genres' Pill
    const allPill = document.createElement('button');
    allPill.className = `genre-ribbon-pill ${state.selectedGenreId === 'all' ? 'active' : ''}`;
    allPill.innerHTML = `<i class="fa-solid fa-sparkles" style="color:var(--accent-gold)"></i> <span>All Genres</span>`;
    allPill.addEventListener('click', () => {
      state.selectedGenreId = 'all';
      renderGenrePills();
      renderMovieFeed(true);
      updateFilterBadges();
    });
    genrePillsContainer.appendChild(allPill);

    // Individual Genre Pills
    DATA.genres.forEach(genre => {
      const pill = document.createElement('button');
      pill.className = `genre-ribbon-pill ${state.selectedGenreId === genre.id ? 'active' : ''}`;
      pill.innerHTML = `<span class="genre-icon">${genre.icon}</span> <span>${genre.name}</span>`;
      pill.addEventListener('click', () => {
        state.selectedGenreId = genre.id;
        renderGenrePills();
        renderMovieFeed(true);
        updateFilterBadges();
      });
      genrePillsContainer.appendChild(pill);
    });
  }

  // --- RENDER TAXONOMY CATEGORIES & DIRECTORS IN RIBBON ---
  function renderTaxonomySidebar() {
    if (!taxonomyCategoriesContainer) return;
    taxonomyCategoriesContainer.innerHTML = '';

    // Group tags by category (excluding Craft)
    const categoriesMap = {};
    DATA.tags.forEach(tag => {
      if (tag.category === 'Craft') return;
      const cat = tag.category || 'General';
      if (!categoriesMap[cat]) categoriesMap[cat] = [];
      categoriesMap[cat].push(tag);
    });

    Object.keys(categoriesMap).forEach(catName => {
      const col = document.createElement('div');
      col.className = 'ribbon-taxonomy-col';

      const isOpen = state.openSections.has(catName);

      const header = document.createElement('div');
      header.className = `taxonomy-section-title collapsible-header ${isOpen ? '' : 'collapsed'}`;
      header.innerHTML = `
        <span>${catName}</span>
        <i class="fa-solid fa-chevron-down accordion-icon"></i>
      `;
      header.addEventListener('click', () => {
        if (state.openSections.has(catName)) {
          state.openSections.delete(catName);
        } else {
          state.openSections.add(catName);
        }
        renderTaxonomySidebar();
      });
      col.appendChild(header);

      const cloud = document.createElement('div');
      cloud.className = `tag-cloud ${isOpen ? '' : 'collapsed'}`;
      cloud.style.display = isOpen ? 'flex' : 'none';

      categoriesMap[catName].forEach(tag => {
        const chip = document.createElement('button');
        const isActive = state.activeTags.has(tag.id);
        chip.className = `tag-chip ${isActive ? 'active' : ''}`;
        chip.innerHTML = `
          <span class="tag-dot" style="background-color: ${tag.color}"></span>
          <span>${tag.label}</span>
        `;
        chip.addEventListener('click', (e) => {
          e.stopPropagation();
          toggleTagFilter(tag.id);
        });
        cloud.appendChild(chip);
      });

      col.appendChild(cloud);
      taxonomyCategoriesContainer.appendChild(col);
    });

    // Top Directors Category Column
    const directorCounts = {};
    DATA.movies.forEach(m => {
      if (!state.deletedIds.has(m.id) && m.director) {
        directorCounts[m.director] = (directorCounts[m.director] || 0) + 1;
      }
    });

    const sortedDirectors = Object.keys(directorCounts).sort((a, b) => directorCounts[b] - directorCounts[a]).slice(0, 18);

    if (sortedDirectors.length > 0) {
      const dirCol = document.createElement('div');
      dirCol.className = 'ribbon-taxonomy-col';

      const isDirOpen = state.openSections.has('Directors');

      const dirHeader = document.createElement('div');
      dirHeader.className = `taxonomy-section-title collapsible-header ${isDirOpen ? '' : 'collapsed'}`;
      dirHeader.innerHTML = `
        <span style="display:flex; align-items:center; gap:0.4rem;">
          <i class="fa-solid fa-clapperboard" style="color: var(--accent-cyan);"></i> Top Directors
        </span>
        <i class="fa-solid fa-chevron-down accordion-icon"></i>
      `;
      dirHeader.addEventListener('click', () => {
        if (state.openSections.has('Directors')) {
          state.openSections.delete('Directors');
        } else {
          state.openSections.add('Directors');
        }
        renderTaxonomySidebar();
      });
      dirCol.appendChild(dirHeader);

      const dirCloud = document.createElement('div');
      dirCloud.className = `tag-cloud ${isDirOpen ? '' : 'collapsed'}`;
      dirCloud.style.display = isDirOpen ? 'flex' : 'none';

      sortedDirectors.forEach(dirName => {
        const chip = document.createElement('button');
        const isActive = state.selectedDirector === dirName;
        chip.className = `tag-chip ${isActive ? 'active' : ''}`;
        chip.style.borderColor = isActive ? 'var(--accent-cyan)' : 'var(--border-subtle)';
        chip.innerHTML = `
          <span class="tag-dot" style="background-color: var(--accent-cyan)"></span>
          <span>${dirName} <small style="opacity:0.7">(${directorCounts[dirName]})</small></span>
        `;
        chip.addEventListener('click', (e) => {
          e.stopPropagation();
          state.selectedDirector = (state.selectedDirector === dirName) ? null : dirName;
          renderTaxonomySidebar();
          renderMovieFeed(true);
          updateFilterBadges();
        });
        dirCloud.appendChild(chip);
      });

      dirCol.appendChild(dirCloud);
      taxonomyCategoriesContainer.appendChild(dirCol);
    }

    renderActiveTagsBox();
    updateFilterBadges();
  }

  // --- RENDER ACTIVE TAGS CHIPS ---
  function renderActiveTagsBox() {
    if (!activeFiltersBox || !activeTagsCloud) return;

    if (state.activeTags.size === 0) {
      activeFiltersBox.style.display = 'none';
      return;
    }

    activeFiltersBox.style.display = 'block';
    activeTagsCloud.innerHTML = '';

    state.activeTags.forEach(tagId => {
      const tag = DATA.tags.find(t => t.id === tagId);
      if (!tag) return;

      const chip = document.createElement('button');
      chip.className = 'tag-chip active';
      chip.innerHTML = `
        <span>${tag.label}</span>
        <i class="fa-solid fa-xmark" style="font-size: 0.75rem; margin-left: 0.25rem;"></i>
      `;
      chip.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleTagFilter(tag.id);
      });
      activeTagsCloud.appendChild(chip);
    });
  }

  function toggleTagFilter(tagId) {
    if (state.activeTags.has(tagId)) {
      state.activeTags.delete(tagId);
    } else {
      state.activeTags.add(tagId);
    }
    renderTaxonomySidebar();
    renderMovieFeed(true);
    updateFilterBadges();
  }

  // --- UPDATE FILTER BADGES & CLEAR BUTTON ---
  function updateFilterBadges() {
    let count = 0;
    if (state.selectedGenreId !== 'all') count++;
    count += state.activeTags.size;
    if (state.selectedDirector !== null) count++;
    if (state.searchQuery.trim() !== '') count++;

    if (activeFilterCountBadge) {
      if (count > 0) {
        activeFilterCountBadge.textContent = count;
        activeFilterCountBadge.style.display = 'inline-block';
      } else {
        activeFilterCountBadge.style.display = 'none';
      }
    }

    if (btnClearFilters) {
      btnClearFilters.style.display = count > 0 ? 'inline-block' : 'none';
    }
  }

  // --- FILTER & SORT MOVIES ---
  function getFilteredMovies() {
    const shuffleOrderMap = new Map();
    state.shuffledMovieIds.forEach((id, idx) => shuffleOrderMap.set(id, idx));

    return DATA.movies.filter(movie => {
      // Exclude deleted movies
      if (state.deletedIds.has(movie.id)) return false;

      // Genre filter
      if (state.selectedGenreId !== 'all') {
        const matchesGenre = movie.genreIds
          ? movie.genreIds.includes(state.selectedGenreId)
          : movie.genreId === state.selectedGenreId;
        if (!matchesGenre) return false;
      }

      // Director filter
      if (state.selectedDirector && movie.director !== state.selectedDirector) {
        return false;
      }

      // Taxonomy tag filter (AND logic)
      if (state.activeTags.size > 0) {
        for (let tagId of state.activeTags) {
          if (!movie.tags.includes(tagId)) {
            return false;
          }
        }
      }

      // Search query filter
      if (state.searchQuery.trim() !== '') {
        const rawQuery = state.searchQuery.toLowerCase().trim();
        const cleanQuery = rawQuery.replace(/^#/, '');
        const titleMatch = movie.title.toLowerCase().includes(rawQuery) || movie.title.toLowerCase().includes(cleanQuery);
        const directorMatch = movie.director.toLowerCase().includes(rawQuery) || movie.director.toLowerCase().includes(cleanQuery);
        const tagMatch = movie.tags.some(t => {
          const tLower = t.toLowerCase();
          return tLower.includes(cleanQuery) || (`#${tLower}`).includes(rawQuery);
        });
        if (!titleMatch && !directorMatch && !tagMatch) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (state.sortBy === 'random') {
        const orderA = shuffleOrderMap.get(a.id) ?? 999999;
        const orderB = shuffleOrderMap.get(b.id) ?? 999999;
        return orderA - orderB;
      }
      if (state.sortBy === 'rank') return a.rank - b.rank;
      if (state.sortBy === 'rating') return b.rating - a.rating;
      if (state.sortBy === 'year-desc') return b.year - a.year;
      if (state.sortBy === 'title') return a.title.localeCompare(b.title);
      return 0;
    });
  }

  // --- RENDER MOVIE FEED (PAGINATED & CHUNKED) ---
  function renderMovieFeed(resetPage = true) {
    if (resetPage) {
      state.currentPage = 1;
      state.currentFilteredMovies = getFilteredMovies();
      movieGrid.innerHTML = '';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const movies = state.currentFilteredMovies;

    // Update Header Text
    if (state.selectedGenreId === 'all') {
      feedTitleText.innerHTML = `<span><i class="fa-solid fa-trophy" style="color: var(--accent-gold)"></i> All Curated Masterpieces</span>`;
    } else {
      const g = DATA.genres.find(g => g.id === state.selectedGenreId);
      feedTitleText.innerHTML = `<span>${g ? g.icon + ' ' + g.name : 'Genre'}</span>`;
    }

    feedCountText.textContent = `Showing ${movies.length} curated ${movies.length === 1 ? 'film' : 'films'}`;

    if (movies.length === 0) {
      movieGrid.innerHTML = `
        <div class="empty-state" style="grid-column: 1 / -1;">
          <div class="empty-state-icon"><i class="fa-solid fa-film"></i></div>
          <h3 style="font-size: 1.25rem; font-weight:700; margin-bottom: 0.5rem; color:#fff;">No movies match your filters</h3>
          <p style="margin-bottom: 1.5rem;">Try clearing active tags or adjusting your search query.</p>
          <button class="btn btn-primary" id="empty-reset-btn">Reset All Filters</button>
        </div>
      `;
      document.getElementById('empty-reset-btn')?.addEventListener('click', clearAllFilters);
      if (infiniteLoadingSpinner) infiniteLoadingSpinner.style.display = 'none';
      if (catalogEndMessage) catalogEndMessage.style.display = 'none';
      return;
    }

    // Slice current page chunk
    const startIndex = (state.currentPage - 1) * state.pageSize;
    const endIndex = Math.min(startIndex + state.pageSize, movies.length);
    const chunk = movies.slice(startIndex, endIndex);

    chunk.forEach(movie => {
      const card = createMovieCard(movie);
      movieGrid.appendChild(card);
    });

    updateSentinelState();
  }

  // --- UPDATE INFINITE SCROLL SENTINEL STATE ---
  function updateSentinelState() {
    const total = state.currentFilteredMovies.length;
    const displayed = Math.min(state.currentPage * state.pageSize, total);

    if (displayed < total) {
      if (infiniteLoadingSpinner) infiniteLoadingSpinner.style.display = 'none';
      if (catalogEndMessage) catalogEndMessage.style.display = 'none';
    } else {
      if (infiniteLoadingSpinner) infiniteLoadingSpinner.style.display = 'none';
      if (catalogEndMessage && total > state.pageSize) {
        catalogEndMessage.style.display = 'inline-flex';
      } else if (catalogEndMessage) {
        catalogEndMessage.style.display = 'none';
      }
    }
  }

  // --- CREATE MOVIE CARD COMPONENT (DISPATCHES BASED ON VIEW MODE) ---
  function createMovieCard(movie) {
    if (state.viewMode === 'rows') {
      return createMovieRowCard(movie);
    }
    return createStandardMovieCard(movie);
  }

  // --- VIEW 1 & 2: STANDARD / COMPACT TILE CARD ---
  function createStandardMovieCard(movie) {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.setAttribute('data-id', movie.id);

    // Rank styling
    let rankClass = '';
    if (movie.rank === 1) rankClass = 'rank-1';
    else if (movie.rank === 2) rankClass = 'rank-2';
    else if (movie.rank === 3) rankClass = 'rank-3';

    // Render tag chips
    const tagHtml = movie.tags.map(tagId => {
      const tagObj = DATA.tags.find(t => t.id === tagId);
      const label = tagObj ? tagObj.label : `#${tagId}`;
      const color = tagObj ? tagObj.color : 'var(--accent-purple)';
      return `<span class="tag-chip-sm" data-tag="${tagId}" style="background:${color}22; border:1px solid ${color}66; color:#fff; cursor:pointer;" title="Click to search ${label}"><span class="tag-dot" style="background:${color}"></span>${label}</span>`;
    }).join('');

    const isFlagged = state.reimportIds.has(movie.id);

    // Admin controls HTML
    let adminActionsHtml = '';
    if (state.isAdmin) {
      adminActionsHtml = `
        <div class="card-admin-actions">
          <button class="card-admin-btn btn-reimport ${isFlagged ? 'active' : ''}" data-action="reimport" title="${isFlagged ? 'Flagged for Poster Re-import (Click to unflag)' : 'Flag for Poster Re-import'}">
            <i class="fa-solid fa-arrows-rotate"></i>
          </button>
          <button class="card-admin-btn btn-delete" data-action="delete" title="Delete Movie from Catalog">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      `;
    }

    const flaggedBadgeHtml = isFlagged ? `
      <div class="card-flagged-badge" title="Flagged for poster replacement">
        <i class="fa-solid fa-flag"></i> Needs Poster
      </div>
    ` : '';

    card.innerHTML = `
      <div class="poster-wrapper">
        <img src="${movie.poster}" alt="${movie.title}" class="poster-img" loading="lazy" onError="this.onerror=null;this.src='https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80';" />
        <div class="rank-badge ${rankClass}">#${movie.rank}</div>
        <div class="rating-badge"><i class="fa-solid fa-star"></i> ${movie.rating}</div>
        
        ${adminActionsHtml}
        ${flaggedBadgeHtml}

        <!-- Idle bottom title gradient bar -->
        <div class="poster-bottom-label">
          <div class="poster-title">${movie.title}</div>
          <div class="poster-subtext">${movie.year} • ${movie.director}</div>
        </div>

        <!-- Ultra-Semi-Transparent Hover Glassmorphism Overlay -->
        <div class="card-hover-overlay">
          <div class="overlay-header">
            <span class="rank-badge ${rankClass}" style="position:static;">#${movie.rank}</span>
            <span class="overlay-rating"><i class="fa-solid fa-star" style="color:var(--accent-gold)"></i> ${movie.rating}</span>
            <span class="overlay-meta-item">${movie.year}</span>
            <span class="overlay-meta-item">${movie.runtime || '2h 10m'}</span>
          </div>

          <h3 class="overlay-title">${movie.title}</h3>
          <div class="overlay-director"><i class="fa-solid fa-film"></i> Dir. ${movie.director}</div>
          
          <div class="overlay-synopsis-box">
            <p class="overlay-synopsis">${movie.synopsis}</p>
          </div>

          <div class="overlay-tags">${tagHtml}</div>

          <button class="overlay-play-btn" aria-label="Watch HD Trailer">
            <i class="fa-solid fa-play"></i> Watch HD Trailer
          </button>
        </div>
      </div>
    `;

    // Clicking anywhere on card opens trailer modal
    card.addEventListener('click', (e) => {
      if (e.target.closest('.card-admin-btn') || e.target.closest('.tag-chip-sm')) {
        return;
      }
      openTrailerModal(movie);
    });

    // Tag chip clicks
    card.querySelectorAll('.tag-chip-sm').forEach(chip => {
      chip.addEventListener('click', (e) => {
        e.stopPropagation();
        const tagId = chip.getAttribute('data-tag');
        if (tagId) applyTagSearch(tagId);
      });
    });

    // Admin action buttons
    if (state.isAdmin) {
      const btnReimport = card.querySelector('.btn-reimport');
      if (btnReimport) {
        btnReimport.addEventListener('click', (e) => {
          e.stopPropagation();
          toggleMovieReimport(movie.id, card);
        });
      }

      const btnDelete = card.querySelector('.btn-delete');
      if (btnDelete) {
        btnDelete.addEventListener('click', (e) => {
          e.stopPropagation();
          deleteMovie(movie.id, movie.title);
        });
      }
    }

    return card;
  }

  // --- VIEW 3: 2-COLUMN TABLE-STYLE ROW CARD ---
  function createMovieRowCard(movie) {
    const card = document.createElement('div');
    card.className = 'movie-card movie-row-card';
    card.setAttribute('data-id', movie.id);

    let rankClass = '';
    if (movie.rank === 1) rankClass = 'rank-1';
    else if (movie.rank === 2) rankClass = 'rank-2';
    else if (movie.rank === 3) rankClass = 'rank-3';

    const isFlagged = state.reimportIds.has(movie.id);

    // Admin controls HTML
    let adminActionsHtml = '';
    if (state.isAdmin) {
      adminActionsHtml = `
        <div class="card-admin-actions always-visible">
          <button class="card-admin-btn btn-reimport ${isFlagged ? 'active' : ''}" data-action="reimport" title="${isFlagged ? 'Flagged for Poster Re-import (Click to unflag)' : 'Flag for Poster Re-import'}">
            <i class="fa-solid fa-arrows-rotate"></i>
          </button>
          <button class="card-admin-btn btn-delete" data-action="delete" title="Delete Movie from Catalog">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      `;
    }

    const flaggedBadgeHtml = isFlagged ? `
      <div class="card-flagged-badge" title="Flagged for poster replacement">
        <i class="fa-solid fa-flag"></i> Needs Poster
      </div>
    ` : '';

    // Render genre badges
    const genreIds = movie.genreIds || (movie.genreId ? [movie.genreId] : []);
    const genrePillsHtml = genreIds.map(gid => {
      const gObj = DATA.genres.find(g => g.id === gid);
      if (!gObj) return '';
      return `<span class="tag-chip-sm" style="background:${gObj.color || 'var(--accent-purple)'}33; border:1px solid ${gObj.color || 'var(--accent-purple)'}77; color:#fff;">${gObj.icon || ''} ${gObj.name}</span>`;
    }).join('');

    // Render tag chips
    const tagHtml = movie.tags.map(tagId => {
      const tagObj = DATA.tags.find(t => t.id === tagId);
      const label = tagObj ? tagObj.label : `#${tagId}`;
      const color = tagObj ? tagObj.color : 'var(--accent-purple)';
      return `<span class="tag-chip-sm" data-tag="${tagId}" style="background:${color}22; border:1px solid ${color}66; color:#fff; cursor:pointer;" title="Click to search ${label}"><span class="tag-dot" style="background:${color}"></span>${label}</span>`;
    }).join('');

    card.innerHTML = `
      <div class="row-poster-thumb">
        <img src="${movie.poster}" alt="${movie.title}" class="row-poster-img" loading="lazy" onError="this.onerror=null;this.src='https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80';" />
        <div class="rank-badge ${rankClass}">#${movie.rank}</div>
        <div class="row-play-overlay"><i class="fa-solid fa-play"></i></div>
      </div>
      <div class="row-content">
        <div class="row-top-bar">
          <div class="row-title-wrap">
            <h3 class="row-title" title="${movie.title}">${movie.title}</h3>
            <span class="row-meta">${movie.year} • Dir. ${movie.director} ${movie.runtime ? '• ' + movie.runtime : ''}</span>
          </div>
          <div class="row-ratings">
            <span class="row-rating-badge"><i class="fa-solid fa-star"></i> ${movie.rating}</span>
            ${movie.rottenTomatoes ? `<span class="row-rt-badge">${movie.rottenTomatoes}</span>` : ''}
            ${adminActionsHtml}
            ${flaggedBadgeHtml}
          </div>
        </div>

        <p class="row-synopsis">${movie.synopsis}</p>

        <div class="row-bottom-bar">
          <div class="row-tags">${genrePillsHtml} ${tagHtml}</div>
          <button class="row-play-btn" title="Watch HD Trailer">
            <i class="fa-solid fa-play"></i> Watch Trailer
          </button>
        </div>
      </div>
    `;

    // Row click handlers
    card.addEventListener('click', (e) => {
      if (e.target.closest('.card-admin-btn') || e.target.closest('.tag-chip-sm')) {
        return;
      }
      openTrailerModal(movie);
    });

    card.querySelectorAll('.tag-chip-sm[data-tag]').forEach(chip => {
      chip.addEventListener('click', (e) => {
        e.stopPropagation();
        const tagId = chip.getAttribute('data-tag');
        if (tagId) applyTagSearch(tagId);
      });
    });

    if (state.isAdmin) {
      const btnReimport = card.querySelector('.btn-reimport');
      if (btnReimport) {
        btnReimport.addEventListener('click', (e) => {
          e.stopPropagation();
          toggleMovieReimport(movie.id, card);
        });
      }

      const btnDelete = card.querySelector('.btn-delete');
      if (btnDelete) {
        btnDelete.addEventListener('click', (e) => {
          e.stopPropagation();
          deleteMovie(movie.id, movie.title);
        });
      }
    }

    return card;
  }

  // --- ADMIN ACTIONS: RE-IMPORT FLAG & DELETE ---
  function toggleMovieReimport(movieId, cardElement) {
    if (!state.isAdmin) return;

    if (state.reimportIds.has(movieId)) {
      state.reimportIds.delete(movieId);
    } else {
      state.reimportIds.add(movieId);
    }

    localStorage.setItem('cinevault_reimport', JSON.stringify([...state.reimportIds]));

    // Refresh card elements
    const isNowFlagged = state.reimportIds.has(movieId);
    const existingBadge = cardElement.querySelector('.card-flagged-badge');
    const reimportBtn = cardElement.querySelector('.btn-reimport');

    if (isNowFlagged) {
      if (!existingBadge) {
        const badge = document.createElement('div');
        badge.className = 'card-flagged-badge';
        badge.innerHTML = `<i class="fa-solid fa-flag"></i> Needs Poster`;
        badge.title = 'Flagged for poster replacement';
        const targetContainer = cardElement.querySelector('.poster-wrapper') || cardElement.querySelector('.row-ratings');
        if (targetContainer) targetContainer.appendChild(badge);
      }
      if (reimportBtn) {
        reimportBtn.classList.add('active');
        reimportBtn.title = 'Flagged for Poster Re-import (Click to unflag)';
      }
    } else {
      if (existingBadge) existingBadge.remove();
      if (reimportBtn) {
        reimportBtn.classList.remove('active');
        reimportBtn.title = 'Flag for Poster Re-import';
      }
    }
  }

  function deleteMovie(movieId, title) {
    if (!state.isAdmin) return;

    const confirmed = confirm(`Are you sure you want to delete "${title}" from CineVault?\n\nThis will immediately remove it from your catalog.`);
    if (!confirmed) return;

    state.deletedIds.add(movieId);
    localStorage.setItem('cinevault_deleted', JSON.stringify([...state.deletedIds]));

    // Remove from current filtered movies and re-render
    state.currentFilteredMovies = state.currentFilteredMovies.filter(m => m.id !== movieId);
    renderMovieFeed(false);
  }

  // --- UPDATE ADMIN UI STATE ---
  function updateAdminUI() {
    if (adminBadge) {
      adminBadge.style.display = state.isAdmin ? 'inline-flex' : 'none';
    }
    if (adminBtnLabel) {
      adminBtnLabel.textContent = state.isAdmin ? 'Lock Admin' : 'Admin';
    }
    if (adminIcon) {
      adminIcon.className = state.isAdmin ? 'fa-solid fa-unlock' : 'fa-solid fa-lock';
      adminIcon.style.color = state.isAdmin ? 'var(--accent-pink)' : 'var(--accent-gold)';
    }
  }

  // --- FILTER SEARCH BY TAXONOMY TAG ---
  function applyTagSearch(tagId) {
    closeTrailerModal();
    state.selectedGenreId = 'all';
    state.activeTags.clear();
    state.activeTags.add(tagId);

    const tagObj = DATA.tags.find(t => t.id === tagId);
    const label = tagObj ? tagObj.label : `#${tagId}`;
    searchInput.value = label;
    state.searchQuery = label;

    renderGenrePills();
    renderTaxonomySidebar();
    renderMovieFeed(true);
    updateFilterBadges();

    const mainFeed = document.querySelector('.feed-content');
    if (mainFeed) mainFeed.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // --- FILTER BY GENRE FROM MODAL ---
  function applyGenreFilter(genreId) {
    closeTrailerModal();
    state.selectedGenreId = genreId;
    state.activeTags.clear();
    state.searchQuery = '';
    searchInput.value = '';

    renderGenrePills();
    renderTaxonomySidebar();
    renderMovieFeed(true);
    updateFilterBadges();

    const mainFeed = document.querySelector('.feed-content');
    if (mainFeed) mainFeed.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // --- OPEN TRAILER MODAL ---
  function openTrailerModal(movie) {
    state.currentTrailerMovie = movie;
    modalMovieTitle.textContent = movie.title;
    
    modalMovieMeta.innerHTML = `
      <span class="rank-badge ${movie.rank <= 3 ? 'rank-1' : ''}" style="position:static; display:inline-block;">Rank #${movie.rank}</span>
      <span style="color:var(--accent-gold); font-weight:700;"><i class="fa-solid fa-star"></i> IMDb ${movie.rating}</span>
      <span>${movie.rottenTomatoes ? 'Rotten Tomatoes ' + movie.rottenTomatoes : ''}</span>
      <span>${movie.year}</span>
      <span>Dir. ${movie.director}</span>
    `;

    modalMovieSynopsis.textContent = movie.synopsis;

    // Render interactive modal taxonomy pills & genres (Separated)
    if (modalMovieGenres) modalMovieGenres.innerHTML = '';
    if (modalMovieTags) modalMovieTags.innerHTML = '';

    // Curated Genres
    const genreIds = movie.genreIds || [movie.genreId];
    genreIds.forEach(gid => {
      const gObj = DATA.genres.find(g => g.id === gid);
      if (!gObj) return;
      const gBtn = document.createElement('button');
      gBtn.className = 'tag-chip';
      const gColor = gObj.color || 'var(--accent-purple)';
      gBtn.style.cssText = `background: ${gColor}22; border: 1px solid ${gColor}; color: #fff; cursor: pointer; transition: all 0.2s var(--transition-smooth); font-weight: 600; padding: 0.35rem 0.85rem;`;
      gBtn.title = `Switch to genre: ${gObj.name}`;
      gBtn.innerHTML = `<span>${gObj.icon}</span> <span>${gObj.name}</span> <i class="fa-solid fa-arrow-right" style="font-size:0.65rem; margin-left:0.35rem; opacity:0.85;"></i>`;
      gBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        applyGenreFilter(gid);
      });
      if (modalMovieGenres) modalMovieGenres.appendChild(gBtn);
    });

    // Taxonomy Tags
    movie.tags.forEach(tagId => {
      const tagObj = DATA.tags.find(t => t.id === tagId);
      const label = tagObj ? tagObj.label : `#${tagId}`;
      const color = tagObj ? tagObj.color : 'var(--accent-purple)';
      const btn = document.createElement('button');
      btn.className = 'tag-chip active';
      btn.style.cssText = `background: ${color}; border-color: ${color}; cursor: pointer; transition: transform 0.2s, box-shadow 0.2s; font-weight: 600; padding: 0.35rem 0.85rem;`;
      btn.title = `Search and filter all movies by ${label}`;
      btn.innerHTML = `<span class="tag-dot" style="background:#fff"></span><span>${label}</span> <i class="fa-solid fa-magnifying-glass" style="font-size:0.65rem; margin-left:0.35rem; opacity:0.85;"></i>`;
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        applyTagSearch(tagId);
      });
      if (modalMovieTags) modalMovieTags.appendChild(btn);
    });

    // Load YouTube video embed with JS API enabled
    modalIframe.src = `https://www.youtube-nocookie.com/embed/${movie.trailerYoutubeId}?autoplay=1&rel=0&enablejsapi=1`;
    isVideoPlaying = true;
    updateFullscreenBtnIcon();
    trailerModal.classList.add('open');
  }

  function closeTrailerModal() {
    if (document.fullscreenElement || document.webkitFullscreenElement) {
      if (document.exitFullscreen) document.exitFullscreen().catch(() => {});
      else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
    }
    trailerModal.classList.remove('open');
    modalIframe.src = '';
    state.currentTrailerMovie = null;
  }

  // --- VIDEO PLAYER FULLSCREEN & PLAY/PAUSE CONTROLS ---
  let isVideoPlaying = true;
  let videoClickTimer = null;

  function toggleVideoFullscreen() {
    if (!videoWrapper) return;
    if (!document.fullscreenElement && !document.webkitFullscreenElement) {
      if (videoWrapper.requestFullscreen) {
        videoWrapper.requestFullscreen().catch(() => {});
      } else if (videoWrapper.webkitRequestFullscreen) {
        videoWrapper.webkitRequestFullscreen();
      }
      showVideoGesture('fa-expand');
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
      showVideoGesture('fa-compress');
    }
  }

  function toggleVideoPlayPause() {
    if (!modalIframe || !modalIframe.contentWindow) return;
    isVideoPlaying = !isVideoPlaying;
    const cmd = isVideoPlaying ? 'playVideo' : 'pauseVideo';
    try {
      modalIframe.contentWindow.postMessage(JSON.stringify({ event: 'command', func: cmd, args: '' }), '*');
    } catch (err) {}
    showVideoGesture(isVideoPlaying ? 'fa-play' : 'fa-pause');
  }

  function showVideoGesture(iconClass) {
    if (!videoGestureIndicator) return;
    videoGestureIndicator.innerHTML = `<i class="fa-solid ${iconClass}"></i>`;
    videoGestureIndicator.classList.add('show');
    clearTimeout(videoGestureIndicator._timer);
    videoGestureIndicator._timer = setTimeout(() => {
      videoGestureIndicator.classList.remove('show');
    }, 450);
  }

  function updateFullscreenBtnIcon() {
    if (!videoFullscreenBtn) return;
    const isFs = !!(document.fullscreenElement || document.webkitFullscreenElement);
    videoFullscreenBtn.innerHTML = `<i class="fa-solid ${isFs ? 'fa-compress' : 'fa-expand'}"></i>`;
    videoFullscreenBtn.title = isFs ? 'Exit Fullscreen (or double-click video)' : 'Toggle Fullscreen (or double-click video)';
  }

  // --- TAXONOMY MANAGER MODAL ---
  function openTaxonomyManager() {
    renderManagerTags();
    taxonomyModal.classList.add('open');
  }

  function closeTaxonomyManager() {
    taxonomyModal.classList.remove('open');
  }

  function renderManagerTags() {
    managerAllTags.innerHTML = '';
    DATA.tags.forEach(tag => {
      const chip = document.createElement('span');
      chip.className = 'tag-chip';
      chip.style.borderColor = tag.color;
      chip.innerHTML = `<span class="tag-dot" style="background:${tag.color}"></span>${tag.label} (${tag.category})`;
      managerAllTags.appendChild(chip);
    });
  }

  function handleAddNewTag() {
    const value = newTagInput.value.trim();
    if (!value) return;

    const formattedLabel = value.startsWith('#') ? value : `#${value}`;
    const id = value.toLowerCase().replace(/[^a-z0-9]/g, '-');

    if (DATA.tags.some(t => t.id === id)) {
      alert('This tag already exists!');
      return;
    }

    const colors = ['#8b5cf6', '#06b6d4', '#ec4899', '#eab308', '#10b981', '#f97316'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    const newTag = {
      id: id,
      label: formattedLabel,
      color: randomColor,
      category: 'Custom Tags'
    };

    DATA.tags.push(newTag);
    newTagInput.value = '';

    renderManagerTags();
    renderTaxonomySidebar();
  }

  // --- ADD MOVIE MODAL HANDLERS ---
  function openAddMovieModal() {
    addMovieModal.classList.add('open');
  }

  function closeAddMovieModal() {
    addMovieModal.classList.remove('open');
  }

  function handleAddMovieSubmit(e) {
    e.preventDefault();

    const genreId = document.getElementById('form-genre').value;
    const rank = parseInt(document.getElementById('form-rank').value, 10);
    const title = document.getElementById('form-title').value.trim();
    const year = parseInt(document.getElementById('form-year').value, 10);
    const rating = parseFloat(document.getElementById('form-rating').value);
    const director = document.getElementById('form-director').value.trim();
    const trailerYoutubeId = document.getElementById('form-trailer').value.trim();
    const synopsis = document.getElementById('form-synopsis').value.trim();
    const rawTags = document.getElementById('form-tags').value;

    const parsedTags = rawTags.split(',').map(t => {
      return t.trim().toLowerCase().replace(/[^a-z0-9]/g, '-');
    }).filter(t => t.length > 0);

    const newMovie = {
      id: `custom-${Date.now()}`,
      genreId,
      genreIds: [genreId],
      rank,
      title,
      year,
      director,
      rating,
      rottenTomatoes: "92%",
      runtime: "2h 15m",
      trailerYoutubeId,
      poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
      synopsis,
      tags: parsedTags.length > 0 ? parsedTags : ["masterpiece"]
    };

    DATA.movies.push(newMovie);
    closeAddMovieModal();
    addMovieForm.reset();

    state.selectedGenreId = genreId;
    renderGenrePills();
    renderMovieFeed(true);
  }

  // --- INFINITE SCROLL OBSERVER ---
  function setupInfiniteScroll() {
    if (!scrollSentinel) return;

    if (infiniteObserver) {
      infiniteObserver.disconnect();
    }

    infiniteObserver = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (!entry || !entry.isIntersecting) return;

      const total = state.currentFilteredMovies.length;
      const currentlyDisplayed = state.currentPage * state.pageSize;

      if (currentlyDisplayed < total && !isAppending) {
        isAppending = true;
        if (infiniteLoadingSpinner) infiniteLoadingSpinner.style.display = 'inline-flex';

        setTimeout(() => {
          state.currentPage++;
          renderMovieFeed(false);
          isAppending = false;
        }, 120);
      }
    }, {
      rootMargin: '400px 0px 400px 0px',
      threshold: 0.05
    });

    infiniteObserver.observe(scrollSentinel);
  }

  // --- CLEAR ALL FILTERS ---
  function clearAllFilters() {
    state.selectedGenreId = 'all';
    state.activeTags.clear();
    state.selectedDirector = null;
    state.searchQuery = '';
    state.sortBy = 'random';

    searchInput.value = '';
    sortSelect.value = 'random';

    shuffleCatalog();
    renderGenrePills();
    renderTaxonomySidebar();
    renderMovieFeed(true);
    updateFilterBadges();
  }

  // --- EVENT LISTENERS ---
  function setupEventListeners() {
    // View mode toggle buttons
    document.querySelectorAll('.view-toggle-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const view = btn.getAttribute('data-view');
        if (view) setViewMode(view);
      });
    });

    // Search input
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      renderMovieFeed(true);
      updateFilterBadges();
    });

    // Sort select
    sortSelect.addEventListener('change', (e) => {
      state.sortBy = e.target.value;
      if (state.sortBy === 'random') {
        shuffleCatalog();
      }
      renderMovieFeed(true);
    });

    // Shuffle mix button
    if (btnShuffle) {
      btnShuffle.addEventListener('click', () => {
        state.sortBy = 'random';
        sortSelect.value = 'random';
        shuffleCatalog();
        renderMovieFeed(true);

        const icon = btnShuffle.querySelector('i');
        if (icon) {
          icon.style.transform = 'rotate(360deg)';
          icon.style.transition = 'transform 0.5s ease';
          setTimeout(() => { icon.style.transform = ''; }, 500);
        }
      });
    }

    // Reset filters
    btnClearFilters.addEventListener('click', clearAllFilters);
    logoLink.addEventListener('click', (e) => {
      e.preventDefault();
      clearAllFilters();
    });

    // --- HORIZONTAL RIBBON CONTROLS & GAPLESS ALIGNMENT ---
    function syncRibbonPosition() {
      const header = document.querySelector('.header');
      if (header && filterRibbonWrapper) {
        filterRibbonWrapper.style.top = `${header.offsetHeight}px`;
      }
    }
    syncRibbonPosition();
    window.addEventListener('resize', syncRibbonPosition);

    if (filterRibbonTrigger && filterRibbonPanel) {
      filterRibbonTrigger.addEventListener('click', () => {
        filterRibbonPanel.classList.toggle('open');
        if (ribbonBackdrop) {
          ribbonBackdrop.classList.toggle('active', filterRibbonPanel.classList.contains('open'));
        }
      });
    }

    if (ribbonBackdrop && filterRibbonPanel) {
      ribbonBackdrop.addEventListener('click', () => {
        filterRibbonPanel.classList.remove('open', 'pinned');
        ribbonBackdrop.classList.remove('active');
      });
    }

    // --- ADMIN AUTHENTICATION CONTROLS ---
    if (btnAdminToggle) {
      btnAdminToggle.addEventListener('click', () => {
        if (state.isAdmin) {
          const lockConfirmed = confirm('Lock Admin Mode?\n\nAdmin curation tools (re-import flags, delete actions) will be hidden.');
          if (lockConfirmed) {
            state.isAdmin = false;
            localStorage.removeItem('cinevault_admin');
            updateAdminUI();
            renderMovieFeed(true);
          }
        } else {
          // Open passphrase modal
          if (adminModal) {
            adminPassphraseInput.value = '';
            if (adminAuthError) adminAuthError.style.display = 'none';
            adminModal.classList.add('open');
            setTimeout(() => adminPassphraseInput?.focus(), 100);
          }
        }
      });
    }

    if (adminModalClose) {
      adminModalClose.addEventListener('click', () => {
        adminModal.classList.remove('open');
      });
    }

    if (btnAdminCancel) {
      btnAdminCancel.addEventListener('click', () => {
        adminModal.classList.remove('open');
      });
    }

    if (adminModal) {
      adminModal.addEventListener('click', (e) => {
        if (e.target === adminModal) adminModal.classList.remove('open');
      });
    }

    if (adminAuthForm) {
      adminAuthForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const pass = adminPassphraseInput.value.trim().toLowerCase();
        // Accepted passphrases for single admin mode
        if (pass === 'admin' || pass === 'admin123' || pass === 'cinevault' || pass === 'superadmin' || pass === 'pass') {
          state.isAdmin = true;
          localStorage.setItem('cinevault_admin', 'true');
          adminModal.classList.remove('open');
          updateAdminUI();
          renderMovieFeed(true);
        } else {
          if (adminAuthError) adminAuthError.style.display = 'block';
        }
      });
    }

    // Modal Close Handlers
    modalCloseBtn.addEventListener('click', closeTrailerModal);
    trailerModal.addEventListener('click', (e) => {
      if (e.target === trailerModal) closeTrailerModal();
    });

    // Video Overlay Gesture & Fullscreen Handlers (Double-click to Fullscreen)
    if (videoClickOverlay) {
      videoClickOverlay.addEventListener('click', (e) => {
        e.stopPropagation();
        if (videoClickTimer) {
          clearTimeout(videoClickTimer);
          videoClickTimer = null;
          toggleVideoFullscreen();
        } else {
          videoClickTimer = setTimeout(() => {
            videoClickTimer = null;
            toggleVideoPlayPause();
          }, 280);
        }
      });

      videoClickOverlay.addEventListener('dblclick', (e) => {
        e.stopPropagation();
        e.preventDefault();
        if (videoClickTimer) {
          clearTimeout(videoClickTimer);
          videoClickTimer = null;
        }
        toggleVideoFullscreen();
      });
    }

    if (videoFullscreenBtn) {
      videoFullscreenBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleVideoFullscreen();
      });
    }

    document.addEventListener('fullscreenchange', updateFullscreenBtnIcon);
    document.addEventListener('webkitfullscreenchange', updateFullscreenBtnIcon);

    // Taxonomy Manager Modal Handlers
    btnTagManager.addEventListener('click', openTaxonomyManager);
    taxonomyModalClose.addEventListener('click', closeTaxonomyManager);
    taxonomyModal.addEventListener('click', (e) => {
      if (e.target === taxonomyModal) closeTaxonomyManager();
    });
    btnAddTag.addEventListener('click', handleAddNewTag);
    newTagInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') handleAddNewTag();
    });

    // Add Movie Modal Handlers
    btnAddMovie.addEventListener('click', openAddMovieModal);
    addMovieModalClose.addEventListener('click', closeAddMovieModal);
    addMovieModal.addEventListener('click', (e) => {
      if (e.target === addMovieModal) closeAddMovieModal();
    });
    addMovieForm.addEventListener('submit', handleAddMovieSubmit);

    // Global Keyboard Shortcuts
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeTrailerModal();
        closeTaxonomyManager();
        closeAddMovieModal();
        if (adminModal) adminModal.classList.remove('open');
        if (filterRibbonPanel) {
          filterRibbonPanel.classList.remove('open');
          if (ribbonBackdrop) ribbonBackdrop.classList.remove('active');
        }
      }
    });
  }

  // Run on DOM ready
  document.addEventListener('DOMContentLoaded', init);
})();
