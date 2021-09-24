import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ActivitiesForm from './Components/Activities/ActivitiesForm';
import CategoriesForm from './Components/Categories/CategoriesForm';
import NewsForm from './Components/News/NewsForm';
import TestimonialForm from './Components/Testimonials/TestimonialsForm';
import UserForm from './Components/Users/UsersForm';
import SchoolCampaign from './Campaigns/School/SchoolCampaign';
import ToysCampaign from './Campaigns/Toys/ToysCampaign';
import MembersForm from './Components/Members/MembersForm';
import ProjectsForm from './Components/Projects/ProjectsForm';
import CreateEditForm from './Components/CreateEditForm/CreateEditForm';
import ActivityDetail from './Components/Activities/ActivityDetail';
import OrganizationForm from './Components/Organization/OrganizationForm';
import NewDetail from './Components/New/Detail';
//import News from './Components/News/News';
import sildesList from './Components/Backoffice/Slides/sildesList';
import NewDetail from './Components/New/Detail';
import Home from './Components/Home/Home';
import ActivitiesList from './Components/Activities/ActivitiesList';
import News from './Components/News/News';
import ContactPage from './Components/Contact/ContactPage';
import { AboutUs } from './Components/About/AboutUs';
import CategoriesPage from './Components/Categories/CategoriesPage';
import SlidesForm from './Components/SlidesForm/';
//import NewDetail from './Components/New/Detail';
import MembersList from './Components/Backoffice/Members/'
import FormEditUsers from './Components/Users/FormEditUsers';
import FormMembers from './Components/Backoffice/FormMembers';
//import SlidesForm from './Components/SlidesForm/';
//import ActivityContent from './Components/Activities/ActivityContent';
//import SlidesForm from './Components/SlidesForm/';
import ActivityContent from './Components/Activities/ActivityContent';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>

          {/* <Route path='/' exact component={} />           Esta ruta debe ser para el Home */}
          <Route path='/create-activity' component={ActivitiesForm} />
          <Route path='/create-category' component={CategoriesForm} />
          <Route path='/create-news' component={NewsForm} />
          <Route path='/backoffice/organization/edit' component={OrganizationForm} />
          <Route path="/novedades" component={NewDetail} />
          {/*<Route path="/novedades" component={News} />*/}
          <Route path="/" exact component={Home} />
          <Route path="/create-activity" component={ActivitiesForm} />
          <Route path="/create-category" component={CategoriesForm} />
          <Route path="/create-news" component={NewsForm} />
          <Route path="/backoffice/create-slide" component={SlidesForm} />
          <Route path="/create-testimonials" component={TestimonialForm} />
          <Route path="/create-user" component={UserForm} />
          <Route path="/create-member" component={MembersForm} />
          <Route path="/create-project" component={ProjectsForm} />
          <Route path="/school-campaign" component={SchoolCampaign} />
          <Route path="/toys-campaign" component={ToysCampaign} />
          <Route path="/novedades" component={NewDetail} />
          <Route path="/backoffice/categories" component={CategoriesPage} />
          <Route path='/backoffice/create-slide' component={SlidesForm} />
          <Route path='/backoffice/slides' component={sildesList} exact />
          <Route path='/backoffice/activities' component={ActivitiesList} />
          <Route path='/create-testimonials' component={TestimonialForm} />
          <Route path='/create-user' component={UserForm} />
          <Route path="/contacto" component={ContactPage} />
          <Route path='/create-member' component={MembersForm} />
          <Route path='/create-project' component={ProjectsForm} />
          <Route path='/school-campaign' component={SchoolCampaign} />
          <Route path='/toys-campaign' component={ToysCampaign} />
          <Route path='/backoffice/members' component={MembersList} />
          <Route path='/create-edit-form' component={CreateEditForm} />
          <Route path="/actividades/:id" component={ActivityDetail} />
          <Route path='/nosotros' component={AboutUs} />
          <Route path='/editar-usuario' component={FormEditUsers} />
          <Route path='/editar-miembros' component={FormMembers} />
          <Route path="/create-slides" component={SlidesForm} />
          {/* <Route path='/activity-content'component={ActivityContent} /> */}
          <Route path='/activity-content' component={ActivityContent} />
        </Switch>
      </BrowserRouter>
      <div className='App'>
      </div>
    </>
  );
}

export default App;