// Import the NavBarComponent from the 'components' folder
import '@/app/stylesheet.css';
import NavBarComponent from './components/navbar_component';

export default function Home() {
  return(
    <>
    <NavBarComponent />
    <div className="background-image-style">
    <a href="https://www.freepik.com/free-photo/white-cloud-blue-sky_3707296.htm#query=weather%20background&position=0&from_view=keyword&track=ais">Image by lifeforstock</a> on Freepik
    </div>
    </>
  );
}
