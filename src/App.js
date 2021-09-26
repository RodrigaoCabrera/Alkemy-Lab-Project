import React from 'react';
import './App.css';
import { BrowserRouter, Switch } from 'react-router-dom';
import ActivitiesForm from './Components/Activities/ActivitiesForm';
import CategoriesForm from './Components/Categories/CategoriesForm';
import NewsForm from './Components/News/NewsForm';
import TestimonialForm from './Components/Testimonials/TestimonialsForm';
import SchoolCampaign from './Campaigns/School/SchoolCampaign';
import ToysCampaign from './Campaigns/Toys/ToysCampaign';
import MembersForm from './Components/Members/MembersForm';
import ProjectsForm from './Components/Projects/ProjectsForm';
import CreateEditForm from './Components/CreateEditForm/CreateEditForm';
import ActivityDetail from './Components/Activities/ActivityDetail';
import OrganizationForm from './Components/Organization/OrganizationForm';
import NewDetail from './Components/New/Detail';
import sildesList from './Components/Backoffice/Slides/sildesList';
import Home from './Components/Home/Home';
import ActivitiesList from './Components/Activities/ActivitiesList';
//import News from './Components/News/News';
import ContactPage from './Components/Contact/ContactPage';
import { AboutUs } from './Components/About/AboutUs';
import CategoriesPage from './Components/Categories/CategoriesPage';
import SlidesForm from './Components/SlidesForm/';
import MembersList from './Components/Backoffice/Members/';
import FormEditUsers from './Components/Users/FormEditUsers';
import FormMembers from './Components/Backoffice/FormMembers';
import ActivityContent from './Components/Activities/ActivityContent';
import PublicRoute from './ComponentsRoute/PublicRoute';
import BackOfficeRoute from './ComponentsRoute/BackOfficeRoute';

import UsersList from './Components/Backoffice/Users/UsersList';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <PublicRoute path="/" exact component={Home}/>
          <PublicRoute path="/novedades" component={NewDetail}/>
          <PublicRoute path="/school-campaign" component={SchoolCampaign} />
          <PublicRoute path="/toys-campaign" component={ToysCampaign} />
          <PublicRoute path="/contacto" component={ContactPage} />
          <PublicRoute path='/nosotros' component={AboutUs} />
          <PublicRoute path="/actividades/:id" component={ActivityDetail} />
          <PublicRoute path='/activity-content' component={ActivityContent} />
          <PublicRoute path="/create-member" component={MembersForm} />
        </Switch>
      </BrowserRouter>
      <BrowserRouter>
        <Switch>
          <BackOfficeRoute path='/create-activity' component={ActivitiesForm} />
          <BackOfficeRoute path='/create-category' component={CategoriesForm} />
          <BackOfficeRoute path='/create-news' component={NewsForm} />
          <BackOfficeRoute path='/backoffice/organization/edit' component={OrganizationForm} />
          <BackOfficeRoute path="/backoffice/create-slide" component={SlidesForm} />
          <BackOfficeRoute path="/create-testimonials" component={TestimonialForm} />
          <BackOfficeRoute path='/backoffice/members' component={MembersList} />
          <BackOfficeRoute path="/create-project" component={ProjectsForm} />
          <BackOfficeRoute path="/backoffice/categories" component={CategoriesPage} />
          <BackOfficeRoute path='/backoffice/create-slide' component={SlidesForm} />
          <BackOfficeRoute path='/backoffice/slides' component={sildesList} exact />
          <BackOfficeRoute path='/backoffice/activities' component={ActivitiesList} />
          <BackOfficeRoute path='/create-edit-form' component={CreateEditForm} />
          <BackOfficeRoute path='/editar-miembros' component={FormMembers} />
          <BackOfficeRoute path="/create-slides" component={SlidesForm} />
          <BackOfficeRoute path="/create-user" component={FormEditUsers} />
        </Switch>
      </BrowserRouter>
      <div className='App'>
      </div>
    </>
  );
}

export default App;