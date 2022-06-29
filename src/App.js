import './App.css';
import LinkCard from './components/LinkCard';

function App() {
  const data = [
  {
    title: 'linkedin',
    tagline: 'Follow me on linkedin',
    username: 'sushilwaghe',
    link:'https://www.linkedin.com/in/sushil-waghe'
  },
  {
    title: 'github',
    tagline: 'Follow me on github',
    username: 'sushilwaghe',
    link: 'https://github.com/sushilwaghe'
  },
  {
    title: 'facebook',
    tagline: 'Follow me on facebook',
    username: 'sushilwaghe',
    link: 'https://www.facebook.com/sushil.waghe.5'
  },
  {
    title: 'instagram',
    tagline: 'Follow me on instagram',
    username: 'sushil_waghe',
    link: 'https://www.instagram.com/sushil_waghe'
  },
]
  return (
    <div className="container">
    <h2 className='app-title'>Link-Tree</h2>
    {
      data.map((cardinfo)=>{
        return <LinkCard title={cardinfo.title} tagline={cardinfo.tagline} username={cardinfo.username} link={cardinfo.link}/>
      })
    }
    </div>
  );
}

export default App;
