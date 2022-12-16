import Head from 'next/head';
import Transition from './Transition';

export default function Layout ({ children }) {

    return(
        <Transition>
            {children}
        </Transition>
    )
}