import { buildCharacterCard, fetchCatalogueEntries } from './site-data.js';

console.debug('[CARD-WIRING] landing.js loaded');

const featuredGrid = document.getElementById('featuredGrid');
const featuredEmpty = document.getElementById('featuredEmpty');
const MAX_FEATURED = 10;

async function loadFeatured() {
  if (!featuredGrid) {
    return;
  }

  try {
    const entries = await fetchCatalogueEntries();
    const featured = entries.filter((entry) => entry.featured);
    const selection = featured.length ? featured : entries.slice(0, MAX_FEATURED);

    if (!selection.length) {
      featuredEmpty?.classList.remove('hidden');
      return;
    }

    selection.forEach((entry) => {
      const cardEl = buildCharacterCard(entry);
      console.debug(
        '[CARD-WIRING] built card tag=',
        cardEl?.tagName,
        'class=',
        cardEl?.className,
        'built-by=',
        cardEl?.getAttribute?.('data-built-by'),
      );
      featuredGrid.appendChild(cardEl);
    });
  } catch (error) {
    if (featuredEmpty) {
      featuredEmpty.textContent = 'Unable to load featured characters right now.';
      featuredEmpty.classList.remove('hidden');
    }
  }
}

loadFeatured();
