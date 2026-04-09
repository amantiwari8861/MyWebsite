import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Landing from "./components/Landing";
import NotFound from "./components/NotFound";
import WhatWeDo from "./pages/WhatWeDo/WhatWeDo";
import AboutSiteforce from "./pages/AboutSiteforce/AboutSiteforce";
import ContactUs from "./pages/ContactUs/ContactUs";
import CorporateTraining from "./pages/CorporateTraining/CorporateTraining";
import HRoutsourcing from "./pages/WhatWeDo/HRoutsourcing";
import ManpowerSupply from "./pages/WhatWeDo/ManpowerSupply";
import ITServices from "./pages/WhatWeDo/ITServices";
import DigitalMarketing from "./pages/WhatWeDo/DigitalMarketing";
import StaffingSolutions from "./pages/WhatWeDo/StaffingSolutions";
import TrainingSkillDevelopment from "./pages/WhatWeDo/TrainingSkillDevelopment";
import Software_Development from "./IT_Services&ITES/Software_Development";
import Website_Development from "./IT_Services&ITES/Website_Development";
import Mobile_App_Development from "./IT_Services&ITES/Mobile_App_Development";
import IOS_Development from "./IT_Services&ITES/IOS_Development";
import Android_Development from "./IT_Services&ITES/Android_Development";
import Cloud_Solutions from "./IT_Services&ITES/Cloud_Solutions";
import AWS_Development from "./IT_Services&ITES/AWS_Development";
import Azure_Development from "./IT_Services&ITES/Azure_Development";
import System_Integration from "./IT_Services&ITES/System_Integration";
import ERP_Integration from "./IT_Services&ITES/ERP_Integration";
import CRM_Integration from "./IT_Services&ITES/CRM_Integration";
import Data_Processing from "./IT_Services&ITES/Data_Processing";
import Data_Entry_Services from "./IT_Services&ITES/Data_Entry_Services";
import BPO_KPO_Services from "./IT_Services&ITES/BPO_KPO_Services";
import Seo_Services from "./Digital_Services/Seo_Services";
import Sem_Marketing from "./Digital_Services/Sem_Marketing";
import Social_Media_Management from "./Digital_Services/Social_Media_Management";
import Online_Advertising from "./Digital_Services/Online_Advertising";
import Branding from "./Digital_Services/Branding";
import Content_Creation from "./Digital_Services/Content_Creation";
import Lead_Generation from "./Digital_Services/Lead_Generation";
import Digital_Promotions from "./Digital_Services/Digital_Promotions";
import UI_UX_Development from "./Digital_Services/UI_UX_Development";
import E_Commerce from "./Digital_Services/E_Commerce";
import IT_Training from "./Training & Skill Development/IT_Training";
import Software_Training from "./Training & Skill Development/Software_Training";
import Call_Center_Training from "./Training & Skill Development/Call_Center_Training";
import Skill_Development from "./Training & Skill Development/Skill_Development";
import Workshops from "./Training & Skill Development/Workshops";
import WhatWeThink from "./pages/whatWeThink/WhatweThink";
import CaseStudies from "./pages/whatWeThink/CaseStudies";
import CaseStudyDetail from "./pages/whatWeThink/CaseStudyDetail";
import Write_Papers from "./pages/whatWeThink/Write_Papers";
import Blog from "./pages/whatWeThink/Blog";
import BlogDetail from "./pages/whatWeThink/BlogDetail";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import ServiceDetail from "./pages/Services/ServiceDetail";
import CustomSoftware from "./pages/Services/CustomSoftware";
import EnterpriseApplications from "./pages/Services/EnterpriseApplications";
import { AppWindow } from "lucide-react";

import ApplyNow from "./pages/careers/ApplyNow";
import JobOpenings from "./pages/careers/JobOpenings";
import OnDemandDevelopers from "./pages/OnDemandDevelopers/OnDemandDevelopers";
import DotNetDeveloper from "./pages/OnDemandDevelopers/DotNetDeveloper";
import CSharpDeveloper from "./pages/OnDemandDevelopers/CSharpDeveloper";
import Careers from "./pages/careers/Careers";
import ChatAgen from "./pages/chatAgen";
import Early_Careers from "./early_Careers/Early_Careers";
import Experienced_professionals from "./experienced_professional/Experienced_professionals";
import Seminars from "./Training & Skill Development/Seminars";
import Recruitment from "./pages/WhatWeDo/Recruitment";
import HRServices from "./pages/WhatWeDo/HRServices";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Landing />,
      },
      {
        path: "what-we-do",
        element: <WhatWeDo />,
      },
      {
        path: "what-we-think",
        element: <WhatWeThink />,
      },
      {
        path: "about-siteforce",
        element: <AboutSiteforce />,
      },
      {
        path: "on-demand-developer",
        element: <OnDemandDevelopers />,
      },
      {
        path: "careers",
        element: <Careers />,
      },
      {
        path: "corporate-training",
        element: <CorporateTraining />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
      {
        path: "services/software-development",
        element: <Software_Development />,
      },
      {
        path: "services/software-development/custom",
        element: <CustomSoftware />,
      },
      {
        path: "services/software-development/enterprise",
        element: <EnterpriseApplications />,
      },
      {
        path: "services/website-development",
        element: <Website_Development />,
      },
      {
        path: "services/mobile-app-development",
        element: <Mobile_App_Development />,
      },
      {
        path: "services/mobile-app-development/ios",
        element: <IOS_Development />,
      },
      {
        path: "services/mobile-app-development/android",
        element: <Android_Development />,
      },
      {
        path: "services/cloud-solutions",
        element: <Cloud_Solutions />,
      },
      {
        path: "services/cloud-solutions/aws",
        element: <AWS_Development />,
      },
      {
        path: "services/cloud-solutions/azure",
        element: <Azure_Development />,
      },
      {
        path: "services/system-integration",
        element: <System_Integration />,
      },
      {
        path: "services/system-integration/erp",
        element: <ERP_Integration />,
      },
      {
        path: "services/system-integration/crm",
        element: <CRM_Integration />,
      },
      {
        path: "services/data-processing",
        element: <Data_Processing />,
      },
      {
        path: "services/data-entry-services",
        element: <Data_Entry_Services />,
      },
      {
        path: "services/bpo-kpo-services",
        element: <BPO_KPO_Services />,
      },
      {
        path: "services/seo-services",
        element: <Seo_Services />,
      },
      {
        path: "services/sem-marketing",
        element: <Sem_Marketing />,
      },
      {
        path: "services/social-media-management",
        element: <Social_Media_Management />,
      },
      {
        path: "services/online-advertising",
        element: <Online_Advertising />,
      },
      {
        path: "services/branding",
        element: <Branding />,
      },
      {
        path: "services/content-creation",
        element: <Content_Creation />,
      },
      {
        path: "services/lead-generation",
        element: <Lead_Generation />,
      },
      {
        path: "services/digital-promotions",
        element: <Digital_Promotions />,
      },
      {
        path: "services/ui-ux-development",
        element: <UI_UX_Development />,
      },
      {
        path: "services/e-commerce",
        element: <E_Commerce />,
      },
      {
        path: "services/it-training",
        element: <IT_Training />,
      },
      {
        path: "services/software-training",
        element: <Software_Training />,
      },
      {
        path: "services/call-center-training",
        element: <Call_Center_Training />,
      },
      {
        path: "services/skill-development",
        element: <Skill_Development />,
      },
      {
        path: "services/workshops",
        element: <Workshops />,
      },
      {
        path: "services/seminars",
        element: <Seminars />,
      },
      {
        path: "services/hr-outsourcing",
        element: <HRoutsourcing />,
      },
      {
        path: "services/manpower-supply",
        element: <ManpowerSupply />,
      },
      {
        path: "services/it-services",
        element: <ITServices />,
      },
      {
        path: "services/digital-marketing",
        element: <DigitalMarketing />,
      },
      {
        path: "services/training-skill-development",
        element: <TrainingSkillDevelopment />,
      },
      {
        path: "services/staffing-solutions",
        element: <StaffingSolutions />,
      },
      {
        path: "services/hr-services",
        element: <HRServices/>,
      },

      {
        path: "services/recruitment",
        element: <Recruitment />,
      },
      {
        path: "services/:service",
        element: <ServiceDetail />,
      },
      {
        path: "services/:service/:subservice",
        element: <ServiceDetail />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "/hr-outsourcing",
        element: <HRoutsourcing />,
      },
      {
        path: "/manpower-supply",
        element: <ManpowerSupply />,
      },
      {
        path: "/it-services",
        element: <ITServices />,
      },
      {
        path: "/training-skill-development",
        element: <TrainingSkillDevelopment />,
      },
      {
        path: "/software-development",
        element: <Software_Development />,
      },
      {
        path: "/website-development",
        element: <Website_Development />,
      },
      {
        path: "/mobile-app-development",
        element: <Mobile_App_Development />,
      },
      {
        path: "/cloud-solutions",
        element: <Cloud_Solutions />,
      },
      {
        path: "/system-integration",
        element: <System_Integration />,
      },
      {
        path: "/data-processing",
        element: <Data_Processing />,
      },
      {
        path: "/data-entry-services",
        element: <Data_Entry_Services />,
      },
      {
        path: "/bpo-kpo-services",
        element: <BPO_KPO_Services />,
      },
      {
        path: "/digital-marketing",
        element: <DigitalMarketing />,
      },
      {
        path: "/seo-services",
        element: <Seo_Services />,
      },
      {
        path: "/sem-marketing",
        element: <Sem_Marketing />,
      },
      {
        path: "/social-media-management",
        element: <Social_Media_Management />,
      },
      {
        path: "/online-advertising",
        element: <Online_Advertising />,
      },
      {
        path: "/branding",
        element: <Branding />,
      },
      {
        path: "/content-creation",
        element: <Content_Creation />,
      },
      {
        path: "/lead-generation",
        element: <Lead_Generation />,
      },
      {
        path: "/digital-promotions",
        element: <Digital_Promotions />,
      },
      {
        path: "/it-training",
        element: <IT_Training />,
      },
      {
        path: "/software-training",
        element: <Software_Training />,
      },
      {
        path: "/call-center-training",
        element: <Call_Center_Training />,
      },
      {
        path: "/skill-development",
        element: <Skill_Development />,
      },
      {
        path: "/workshops",
        element: <Workshops />,
      },
      {
        path: "/staffing-solutions",
        element: <StaffingSolutions />,
      },
      {
        path: "/seminars",
        element: <Seminars />,
      },

      {
        path: "/what-we-think",
        element: <WhatWeThink />,
      },
      {
        path: "/blogs",
        element: <Blog />,
      },
      {
        path: "/blogs/:id",
        element: <BlogDetail />,
      },
      {
        path: "/case-studies",
        element: <CaseStudies />,
      },
      {
        path: "/case-studies/:id",
        element: <CaseStudyDetail />,
      },
      {
        path: "/whitepapers",
        element: <Write_Papers />,
      },
      {
        path: "/apply-now",

        element: <ApplyNow />,
      },
      {
        path: "/job-Openings",
        element: <JobOpenings />,
      },
      {
        path: "/dotnet-developers",
        element: <DotNetDeveloper />,
      },
      {
        path: "/csharp-developers",
        element: <CSharpDeveloper />,
      },
      {
        path: "/chat",
        element: <ChatAgen />,
      },
      {
        path: "/early-careers",
        element: <Early_Careers />,
      },
      {
        path: "/experienced-professionals",
        element: <Experienced_professionals />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
