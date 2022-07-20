import { ReactElement } from 'react';
import { Link } from 'react-router-dom';

export function NotFound(): ReactElement {
  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
          </div>
        </div>
      </header>
      <main className="page__main">
        <div className="page__login-container container">
          <div className="page-not-found">
            <div className="page-not-found__content">
              <p className="login__title mb-15">404 Not Found</p>
              <Link className="locations__item-link tabs__item pd-0" to="/"><span>Home page</span></Link>
            </div>
          </div>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
