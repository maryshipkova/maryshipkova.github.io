import { Registry, withRegistry } from '@bem-react/di';
import { cn } from '@bem-react/classname';
import { App as AppCommon } from './App';
import { Header } from './Header@desktop';

const cnApp = cn('App');
const cnHeader = cn('Header');

// registry with desktop versions of components
const registry = new Registry({ id: cnApp() });

registry.set(cnHeader(), Header);
export const App = withRegistry(registry)(AppCommon);