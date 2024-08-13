import css from './Home.modules.css'
const Home=()=>{
    return(
        <div>
            <h3 className={css.title}>Home Title</h3>
            <p className={css.text}>Hello, This is home page.</p>
        </div>
    );
};
export default Home;