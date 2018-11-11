import React, {Component, Fragment} from 'react';
import '../style.css';
import Footer from "./Footer";
import Events from "./Event";
import {RegistryConsumer} from "@bem-react/di";
import {cn} from "@bem-react/classname";


const cnApp = cn('App');
const  cnHeader = cn('Header');
export class App extends Component {

    render() {
        return (
            <Fragment>
                <RegistryConsumer>
                    {registries => {
                        const registry = registries[cnApp()];
                        const Header = registry.get(cnHeader());
                        return <Header/>;
                    }}
                </RegistryConsumer>
                <main className="Content">
                    <div className="Content-Header">
                        <h1 className="Heading-Primary">
                            Лента событий
                        </h1>
                    </div>
                    <section className="Events" id="events">
                        <Events/>
                    </section>
                </main>
                <Footer/>
            </Fragment>
        );
    }
}

