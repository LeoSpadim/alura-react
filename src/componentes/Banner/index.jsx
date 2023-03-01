import './Banner.css';

const Banner = () => {
    return(
        <header className='banner'>
            <img src={`${process.env.PUBLIC_URL}/imagens/banner.png`} alt="banner" />
        </header>
    );
}

export default Banner;
