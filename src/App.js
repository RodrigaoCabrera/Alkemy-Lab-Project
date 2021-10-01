import React, { Suspense, lazy } from 'react';
import { useSelector } from 'react-redux';
import { AnimatedSwitch } from 'react-router-transition';
import PublicRoute from './ComponentsRoute/PublicRoute';
import BackOfficeRoute from './ComponentsRoute/BackOfficeRoute';
import './App.css';
import Loading from './Components/UI/Loading';

import { BrowserRouter, Redirect, Route } from 'react-router-dom';

const ActivitiesForm = lazy(() => import('./Components/Activities/ActivitiesForm'));
const CategoriesForm = lazy(() => import('./Components/Categories/CategoriesForm'));
const NewsForm = lazy(() => import('./Components/News/NewsForm'));
const TestimonialForm = lazy(() => import('./Components/Testimonials/TestimonialsForm'));
const SchoolCampaign = lazy(() => import('./Campaigns/School/SchoolCampaign'));
const ToysCampaign = lazy(() => import('./Campaigns/Toys/ToysCampaign'));
const MembersForm = lazy(() => import('./Components/Members/MembersForm'));
const ProjectsForm = lazy(() => import('./Components/Projects/ProjectsForm'));
const CreateEditForm = lazy(() => import('./Components/CreateEditForm/CreateEditForm'));
const ActivityDetail = lazy(() => import('./Components/Activities/ActivityDetail'));
const OrganizationForm = lazy(() => import('./Components/Organization/OrganizationForm'));
const NewDetail = lazy(() => import('./Components/New/Detail'));
const sildesList = lazy(() => import('./Components/Backoffice/Slides/sildesList'));
const Home = lazy(() => import('./Components/Home/Home'));
const ActivitiesList = lazy(() => import('./Components/Activities/ActivitiesList'));
const News = lazy(() => import('./Components/News/News'));
const ContactPage = lazy(() => import('./Components/Contact/ContactPage'));
const AboutUs = lazy(() => import('./Components/About/AboutUs'));
const CategoriesPage = lazy(() => import('./Components/Categories/CategoriesPage'));
const SlidesForm = lazy(() => import('./Components/SlidesForm/'));
const MembersList = lazy(() => import('./Components/Backoffice/Members/'));
const FormEditUsers = lazy(() => import('./Components/Users/FormEditUsers'));
const FormMembers = lazy(() => import('./Components/Backoffice/Members/FormMembers'));
const ActivityContent = lazy(() => import('./Components/Activities/ActivityContent'));
const SlidesDetail = lazy(() => import('./Components/SlidesForm/SlidesDetail'));
import { LoginForm } from './Components/Auth/LoginForm';
import PrivateRoute from './ComponentsRoute/PrivateRoute';
const UsersList = lazy(() => import('./Components/Backoffice/Users/UsersList'));
const RegisterForm = lazy(() => import('./Components/Auth/RegisterForm'));

function App() {
  const loggedIn = useSelector((state) => state.auth.Autenticacion);

  function mapStyles(styles) {
    return {
      opacity: styles.opacity,
      transform: `scale(${styles.scale})`,
    };
  }
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Loading/>}>
          <AnimatedSwitch
            atEnter={{
              opacity: 0,
              scale: 1.3,
            }}
            atLeave={{
              opacity: 0,
              scale: 0.8,
            }}
            atActive={{
              opacity: 1,
              scale: 1,
            }}
            mapStyles={mapStyles}
          >
            <Route path="/" exact component={Home} />
            <Route path="/login">
              {loggedIn ? <Redirect to="/" /> : <LoginForm />}
            </Route>
            <PrivateRoute path='/register' component={RegisterForm} />
            <PublicRoute path="/novedades" component={NewDetail} />
            <PublicRoute path="/school-campaign" component={SchoolCampaign} />
            <PublicRoute path="/toys-campaign" component={ToysCampaign} />
            <PublicRoute path="/contacto" component={ContactPage} />
            <PublicRoute path="/nosotros" component={AboutUs} />
            <PublicRoute path="/actividades/:id" component={ActivityDetail} />
            <PublicRoute path="/activity-content" component={ActivityContent} />
            <PublicRoute path="/create-member" component={MembersForm} />
            <PublicRoute path="/news" component={News} />
          </AnimatedSwitch>
          <AnimatedSwitch
            atEnter={{
              opacity: 0,
              scale: 1.3,
            }}
            atLeave={{
              opacity: 0,
              scale: 0.8,
            }}
            atActive={{
              opacity: 1,
              scale: 1,
            }}
            mapStyles={mapStyles}
          >
            <BackOfficeRoute path="/create-activity" component={ActivitiesForm} />
            <BackOfficeRoute path="/create-category" component={CategoriesForm} />
            <BackOfficeRoute path="/create-news" component={NewsForm} />
            <BackOfficeRoute
              path="/backoffice/organization/edit"
              component={OrganizationForm}
            />
            <BackOfficeRoute
              path="/backoffice/create-slide"
              component={SlidesForm}
            />
            <BackOfficeRoute
              path="/create-testimonials"
              component={TestimonialForm}
            />
            <BackOfficeRoute path="/backoffice/members" component={MembersList} />
            <BackOfficeRoute path="/create-project" component={ProjectsForm} />
            <BackOfficeRoute
              path="/backoffice/categories"
              component={CategoriesPage}
            />
            <BackOfficeRoute
              path="/backoffice/create-slide"
              component={SlidesForm}
            />
            <BackOfficeRoute
              path="/backoffice/slides"
              component={sildesList}
              exact
            />
            <BackOfficeRoute
              path="/backoffice/activities"
              component={ActivitiesList}
            />
            <BackOfficeRoute
              path="/create-edit-form"
              component={CreateEditForm}
            />
            <BackOfficeRoute path="/editar-miembros" component={FormMembers} />
            <BackOfficeRoute path="/create-slides" component={SlidesForm} />
            <BackOfficeRoute path="/create-user" component={FormEditUsers} />
            <BackOfficeRoute path="/backoffice/users" component={UsersList} />
          </AnimatedSwitch>
        </Suspense>
      </BrowserRouter>
      <div className="App"></div>
    </>
  );
}

export default App;
