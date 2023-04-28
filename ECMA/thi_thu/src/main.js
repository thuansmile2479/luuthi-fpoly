import { router, render } from './libs';
import add from './pages/add';
import edit from './pages/edit';
import list from './pages/list';

const app = document.querySelector('#app');

router.on('/', () => render(list, app));
router.on('/add', () => render(add, app));
router.on('/edit/:id', ({ data }) => render(() => edit(data), app));
router.resolve();
