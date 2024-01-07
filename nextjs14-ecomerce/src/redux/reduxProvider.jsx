'use client'

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from '@/redux/store';

export default function ReduxProvider({ children }) {
    return (
        <>
            <Provider store={store}>
                <PersistGate loading={"loading..."} persistor={persistor}>
                    {children}
                </PersistGate>
            </Provider>
        </>
    )
}