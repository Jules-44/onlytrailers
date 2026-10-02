// Traylaz - Main Application Logic & Taxonomy Engine (Expanded)

(function () {
  'use strict';

  // --- STATE MANAGEMENT ---
  const state = {
    selectedGenreId: 'all',
    activeTags: new Set(),
    searchQuery: '',
    sortBy: 'rank',
    currentTrailerMovie: null
  };

  // DOM Elements
  const genrePillsContainer = document.getElementById('genre-pills-container');
  const activeGenreIndicator = document.getElementById('active-genre-indicator');
  const taxonomyCategoriesContainer = document.getElementById('taxonomy-categories-container');
  const activeFiltersBox = document.getElementById('active-filters-box');
  const activeTagsCloud = document.getElementById('active-tags-cloud');
  const movieGrid = document.getElementById('movie-grid');
  const feedTitleText = document.getElementById('feed-title-text');
  const feedCountText = document.getElementById('feed-count-text');
  const searchInput = document.getElementById('search-input');
  const sortSelect = document.getElementById('sort-select');
  const btnClearFilters = document.getElementById('btn-clear-filters');
  const logoLink = document.getElementById('logo-link');

  // Modal Elements
  const trailerModal = document.getElementById('trailer-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalIframe = document.getElementById('modal-iframe');
  const modalMovieTitle = document.getElementById('modal-movie-title');
  const modalMovieMeta = document.getElementById('modal-movie-meta');
  const modalMovieSynopsis = document.getElementById('modal-movie-synopsis');
  const modalMovieTags = document.getElementById('modal-movie-tags');

  // Taxonomy Manager Elements
  const btnTagManager = document.getElementById('btn-tag-manager');
  const taxonomyModal = document.getElementById('taxonomy-modal');
  const taxonomyModalClose = document.getElementById('taxonomy-modal-close');
  const managerAllTags = document.getElementById('manager-all-tags');
  const newTagInput = document.getElementById('new-tag-input');
  const btnAddTag = document.getElementById('btn-add-tag');

  // Add Movie Elements
  const btnAddMovie = document.getElementById('btn-add-movie');
  const addMovieModal = document.getElementById('add-movie-modal');
  const addMovieModalClose = document.getElementById('add-movie-modal-close');
  const addMovieForm = document.getElementById('add-movie-form');
  const formGenreSelect = document.getElementById('form-genre');

  // --- INITIALIZATION ---
  function init() {
    renderGenrePills();
    renderTaxonomySidebar();
    renderMovieFeed();
    populateFormGenres();

    setupEventListeners();
  }

  // --- POPULATE GENRE FORM SELECT ---
  function populateFormGenres() {
    formGenreSelect.innerHTML = window.TRAYLAZ_DATA.genres.map(g => 
      `<option value="${g.id}">${g.name}</option>`
    ).join('');
  }

  // --- RENDER GENRE PILLS BAR ---
  function renderGenrePills() {
    genrePillsContainer.innerHTML = '';

    // 'All Selected Genres' Pill
    const allPill = document.createElement('button');
    allPill.className = `genre-pill ${state.selectedGenreId === 'all' ? 'active' : ''}`;
    allPill.innerHTML = `<i class="fa-solid fa-sparkles"></i> All 10 Featured Genres`;
    allPill.addEventListener('click', () => {
      state.selectedGenreId = 'all';
      renderGenrePills();
      renderMovieFeed();
    });
    genrePillsContainer.appendChild(allPill);

    // Individual Genre Pills
    window.TRAYLAZ_DATA.genres.forEach(genre => {
      const pill = document.createElement('button');
      pill.className = `genre-pill ${state.selectedGenreId === genre.id ? 'active' : ''}`;
      pill.innerHTML = `<span>${genre.icon}</span> <span>${genre.name}</span>`;
      pill.addEventListener('click', () => {
        state.selectedGenreId = genre.id;
        renderGenrePills();
        renderMovieFeed();
      });
      genrePillsContainer.appendChild(pill);
    });

    activeGenreIndicator.textContent = state.selectedGenreId === 'all'
      ? `${window.TRAYLAZ_DATA.genres.length} Featured Genres`
      : `Selected: ${window.TRAYLAZ_DATA.genres.find(g => g.id === state.selectedGenreId)?.name}`;
  }

  // --- RENDER TAXONOMY SIDEBAR & CATEGORIES ---
  function renderTaxonomySidebar() {
    taxonomyCategoriesContainer.innerHTML = '';

    // Group tags by category
    const categoriesMap = {};
    window.TRAYLAZ_DATA.tags.forEach(tag => {
      const cat = tag.category || 'General';
      if (!categoriesMap[cat]) categoriesMap[cat] = [];
      categoriesMap[cat].push(tag);
    });

    Object.keys(categoriesMap).forEach(catName => {
      const section = document.createElement('div');
      section.className = 'taxonomy-section';

      const title = document.createElement('div');
      title.className = 'taxonomy-section-title';
      title.textContent = catName;
      section.appendChild(title);

      const cloud = document.createElement('div');
      cloud.className = 'tag-cloud';

      categoriesMap[catName].forEach(tag => {
        const chip = document.createElement('button');
        const isActive = state.activeTags.has(tag.id);
        chip.className = `tag-chip ${isActive ? 'active' : ''}`;
        chip.innerHTML = `
          <span class="tag-dot" style="background-color: ${tag.color}"></span>
          <span>${tag.label}</span>
        `;
        chip.addEventListener('click', () => {
          toggleTagFilter(tag.id);
        });
        cloud.appendChild(chip);
      });

      section.appendChild(cloud);
      taxonomyCategoriesContainer.appendChild(section);
    });

    renderActiveTagsBox();
  }

  // --- RENDER ACTIVE TAGS BOX ---
  function renderActiveTagsBox() {
    if (state.activeTags.size === 0) {
      activeFiltersBox.style.display = 'none';
      return;
    }

    activeFiltersBox.style.display = 'block';
    activeTagsCloud.innerHTML = '';

    state.activeTags.forEach(tagId => {
      const tag = window.TRAYLAZ_DATA.tags.find(t => t.id === tagId);
      if (!tag) return;

      const chip = document.createElement('button');
      chip.className = 'tag-chip active';
      chip.innerHTML = `
        <span>${tag.label}</span>
        <i class="fa-solid fa-xmark" style="font-size: 0.75rem; margin-left: 0.25rem;"></i>
      `;
      chip.addEventListener('click', () => {
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
    renderMovieFeed();
  }

  // --- FILTER & SORT MOVIES ---
  function getFilteredMovies() {
    return window.TRAYLAZ_DATA.movies.filter(movie => {
      // Genre filter
      if (state.selectedGenreId !== 'all' && movie.genreId !== state.selectedGenreId) {
        return false;
      }

      // Taxonomy tag filter (AND logic: movie must have ALL active tags)
      if (state.activeTags.size > 0) {
        for (let tagId of state.activeTags) {
          if (!movie.tags.includes(tagId)) {
            return false;
          }
        }
      }

      // Search query filter
      if (state.searchQuery.trim() !== '') {
        const query = state.searchQuery.toLowerCase();
        const titleMatch = movie.title.toLowerCase().includes(query);
        const directorMatch = movie.director.toLowerCase().includes(query);
        const tagMatch = movie.tags.some(t => t.toLowerCase().includes(query));
        if (!titleMatch && !directorMatch && !tagMatch) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (state.sortBy === 'rank') return a.rank - b.rank;
      if (state.sortBy === 'rating') return b.rating - a.rating;
      if (state.sortBy === 'year-desc') return b.year - a.year;
      if (state.sortBy === 'title') return a.title.localeCompare(b.title);
      return 0;
    });
  }

  // --- RENDER MOVIE FEED ---
  function renderMovieFeed() {
    const movies = getFilteredMovies();
    movieGrid.innerHTML = '';

    // Update Header Text
    if (state.selectedGenreId === 'all') {
      feedTitleText.innerHTML = `<span><i class="fa-solid fa-trophy" style="color: var(--accent-gold)"></i> All Top Curated Masterpieces</span>`;
    } else {
      const g = window.TRAYLAZ_DATA.genres.find(g => g.id === state.selectedGenreId);
      feedTitleText.innerHTML = `<span>${g ? g.icon + ' ' + g.name : 'Genre'}</span>`;
    }

    feedCountText.textContent = `Showing ${movies.length} curated ${movies.length === 1 ? 'movie' : 'movies'}`;

    if (movies.length === 0) {
      movieGrid.innerHTML = `
        <div class="empty-state" style="grid-column: 1 / -1;">
          <div class="empty-state-icon"><i class="fa-solid fa-film"></i></div>
          <h3 style="font-size: 1.25rem; font-weight:700; margin-bottom: 0.5rem; color:#fff;">No movies match your taxonomy filters</h3>
          <p style="margin-bottom: 1.5rem;">Try clearing active tag pills or adjusting your search query.</p>
          <button class="btn btn-primary" id="empty-reset-btn">Reset All Filters</button>
        </div>
      `;
      document.getElementById('empty-reset-btn')?.addEventListener('click', clearAllFilters);
      return;
    }

    movies.forEach(movie => {
      const card = createMovieCard(movie);
      movieGrid.appendChild(card);
    });
  }

  // --- CREATE MOVIE CARD COMPONENT ---
  function createMovieCard(movie) {
    const card = document.createElement('div');
    card.className = 'movie-card';

    // Rank Badge styling
    let rankClass = '';
    if (movie.rank === 1) rankClass = 'rank-1';
    else if (movie.rank === 2) rankClass = 'rank-2';
    else if (movie.rank === 3) rankClass = 'rank-3';

    // Render tag chips
    const tagHtml = movie.tags.map(tagId => {
      const tagObj = window.TRAYLAZ_DATA.tags.find(t => t.id === tagId);
      const label = tagObj ? tagObj.label : `#${tagId}`;
      const color = tagObj ? tagObj.color : 'var(--accent-purple)';
      return `<span class="tag-chip" style="font-size:0.75rem; padding:0.2rem 0.5rem; border-color:${color}; color:#fff;"><span class="tag-dot" style="background:${color}"></span>${label}</span>`;
    }).join('');

    card.innerHTML = `
      <div class="card-banner">
        <div class="rank-badge ${rankClass}">#${movie.rank}</div>
        <div class="rating-badge"><i class="fa-solid fa-star"></i> ${movie.rating}</div>
        <img src="${movie.poster}" alt="${movie.title}" class="card-img" loading="lazy" />
        <div class="card-overlay">
          <div class="play-btn-circle">
            <i class="fa-solid fa-play" style="margin-left: 4px;"></i>
          </div>
        </div>
      </div>
      <div class="card-body">
        <h3 class="card-title">${movie.title}</h3>
        <div class="card-meta">
          <span>${movie.year}</span> • <span>${movie.director}</span> • <span>${movie.runtime || '2h 10m'}</span>
        </div>
        <p class="card-synopsis">${movie.synopsis}</p>
        <div class="card-tags">${tagHtml}</div>
      </div>
    `;

    card.addEventListener('click', () => {
      openTrailerModal(movie);
    });

    return card;
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

    // Render modal tags
    modalMovieTags.innerHTML = movie.tags.map(tagId => {
      const tagObj = window.TRAYLAZ_DATA.tags.find(t => t.id === tagId);
      const label = tagObj ? tagObj.label : `#${tagId}`;
      const color = tagObj ? tagObj.color : 'var(--accent-purple)';
      return `<button class="tag-chip active" style="background:${color}; border-color:${color}"><span class="tag-dot" style="background:#fff"></span>${label}</button>`;
    }).join('');

    // Load YouTube video embed
    modalIframe.src = `https://www.youtube-nocookie.com/embed/${movie.trailerYoutubeId}?autoplay=1&rel=0`;
    
    trailerModal.classList.add('open');
  }

  function closeTrailerModal() {
    trailerModal.classList.remove('open');
    modalIframe.src = ''; // Stop video playback
    state.currentTrailerMovie = null;
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
    window.TRAYLAZ_DATA.tags.forEach(tag => {
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

    if (window.TRAYLAZ_DATA.tags.some(t => t.id === id)) {
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

    window.TRAYLAZ_DATA.tags.push(newTag);
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
      let clean = t.trim().toLowerCase().replace(/[^a-z0-9]/g, '-');
      return clean;
    }).filter(t => t.length > 0);

    const newMovie = {
      id: `custom-${Date.now()}`,
      genreId,
      rank,
      title,
      year,
      director,
      rating,
      rottenTomatoes: "90%",
      runtime: "2h 15m",
      trailerYoutubeId,
      poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
      synopsis,
      tags: parsedTags.length > 0 ? parsedTags : ["masterpiece"]
    };

    window.TRAYLAZ_DATA.movies.push(newMovie);
    closeAddMovieModal();
    addMovieForm.reset();

    // Select that genre & re-render
    state.selectedGenreId = genreId;
    renderGenrePills();
    renderMovieFeed();
  }

  // --- EVENT LISTENERS ---
  function setupEventListeners() {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      renderMovieFeed();
    });

    sortSelect.addEventListener('change', (e) => {
      state.sortBy = e.target.value;
      renderMovieFeed();
    });

    btnClearFilters.addEventListener('click', clearAllFilters);
    
    logoLink.addEventListener('click', (e) => {
      e.preventDefault();
      clearAllFilters();
    });

    // Trailer Modal Close Handlers
    modalCloseBtn.addEventListener('click', closeTrailerModal);
    trailerModal.addEventListener('click', (e) => {
      if (e.target === trailerModal) closeTrailerModal();
    });

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
      }
    });
  }

  function clearAllFilters() {
    state.selectedGenreId = 'all';
    state.activeTags.clear();
    state.searchQuery = '';
    state.sortBy = 'rank';

    searchInput.value = '';
    sortSelect.value = 'rank';

    renderGenrePills();
    renderTaxonomySidebar();
    renderMovieFeed();
  }

  // Run on DOM loaded
  document.addEventListener('DOMContentLoaded', init);
})();
