import { createWebHistory,createRouter} from "vue-router";
import HomeComponent from './components/HomeComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import ContentComponent from './components/ContentComponent.vue';
import AboutComponent from './components/AboutComponent.vue';
import AuthorComponent from './components/AuthorComponent.vue';
import PublicationComponent from './components/PublicationComponent.vue';
import ArticleComponent from './components/ArticleComponent.vue';
import FallaciesComponent from './components/FallaciesComponent.vue';
import HowtoComponent from './components/HowtoComponent.vue';
import ContactComponent from './components/ContactComponent.vue';
import FAQComponent from './components/FAQComponent.vue';
import DonateComponent from './components/DonateComponent.vue';
import LoginComponent from './components/LoginComponent.vue';
import SignupComponent from './components/SignupComponent.vue';
import FooterComponent from './components/FooterComponent.vue';






const routes=[
    { name:"HomeComponent",path:"/homecomponent",component:HomeComponent },
    { name:"Header",path:"/header",component:HeaderComponent },
    { name:"Content",path:"/",component:ContentComponent },
    { name:"AboutComponent",path:"/about",component:AboutComponent},
    { name:"AuthorComponent",path:"/author",component:AuthorComponent},
    { name:"PublicationComponent",path:"/publication",component:PublicationComponent},
    { name:"ArticleComponent",path:"/article",component:ArticleComponent },
    { name:"FallaciesComponent",path:"/fallacies",component:FallaciesComponent },
    { name:"HowtoComponent",path:"/Howto",component:HowtoComponent},
    { name:"ContactComponent",path:"/contact",component:ContactComponent},
    { name:"FAQComponent",path:"/faqs",component:FAQComponent},
    { name:"DonateComponent",path:"/donate",component:DonateComponent},
    { name:"LoginComponent",path:"/logincomponent",component:LoginComponent },        
    { name:"SignupComponent",path:"/signupcomponent",component:SignupComponent },
    { name:"Footer",path:"/footer",component:FooterComponent }  ,
   
];


const router=createRouter({
    history:createWebHistory(),
    routes
});
export default router;