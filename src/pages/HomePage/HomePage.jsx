import GenreList from '../../components/GenreList/GenreList';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import './HomePage.scss';

function HomePage() {  
  document.title = "Welcome to Lauren's Bookstore"

  return (
      <main className="main">
        <div className="main__content">
          <SectionTitle 
              title='Types of Books'
              description="Here's a list of all our genres, click on one to see our books!"
          />
          <GenreList />
        </div>
        <div className="main__content">
          <SectionTitle 
              title='About Us'
              description='a little bit about us'
          />
          <p>
            Welcome to our bookstore! This site has been through many changes, but we hope you find something useful!
          </p>
          <p>Built by BrainStation class May 2021</p>
        </div>
      </main>
  );
}

export default HomePage;
