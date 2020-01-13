import Home from '../pages/Home';
import Message from '../pages/Message';

const MenuUtil = [{
  id: 1,
  title: 'Dashboard',
  path: '/dashboard',
  component: Home,
}, {
  id: 2,
  title: 'Cadastro de Mensagem',
  path: '/cadastro',
  component: Message,
}];

export default MenuUtil;
