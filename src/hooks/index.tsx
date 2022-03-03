import React from 'react';
import { AddyHookProvider } from './useSlotPokeball';

const AppProvider = ({ children }: any) => (
  <AddyHookProvider>{children}</AddyHookProvider>
);

export default AppProvider;
