import { FunctionComponent, useEffect, useState } from "react";
import Recette from "../models/recettes";
import RECETTES from "../models/recette-mock";

import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import RecettesCard from "../components/RecettesCard";

const RecettesList: FunctionComponent = () => {
    const [recettes, setRecettes] = useState<Recette[]>([]);
    useEffect(() => {
        setRecettes(RECETTES)
    }, [])

    return ( 
        <>
            <Navbar />
                <Banner 
                    titre = "Recettes"
                    bannerImg = "https://images.pexels.com/photos/4911845/pexels-photo-4911845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    cName = "banner-demi"
                    btnClass = "hide"
                />
                {
                    recettes.map((r) =>
                    <RecettesCard
                        key={r.id}
                        recette = {r}
                    />
                    )
                }
                
            <Footer />
        </>
    );
}
 
export default RecettesList;