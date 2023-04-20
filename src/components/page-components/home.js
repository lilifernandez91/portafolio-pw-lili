import Image from "next/image";

const HomeComponent = () => {
    return (
        <div className="home-container__content">
            <Image src="/images/imagen-1.png" alt="" width={500} height={200} className="home-container__content__img" />
            <div>
                <h3 className="home-container__content__text"> Hola, soy Lili Fernández</h3>
                <p className="home-container__content__rol">Frontend Developer Jr.</p>
            </div>
        </div>
    );
}

export default HomeComponent;