import { proxy, useSnapshot } from 'valtio'

const MenuState = proxy<{ isOpen: boolean }>({ isOpen: false });

export { MenuState };