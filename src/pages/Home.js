import React from "react";
import HomePageHeader from "../components/HomePageHeader/HomePageHeader";
import RecipeCard from "../components/RecipeCard/RecipeCard";
import Footer from "../components/Footer/Footer";

const Home = ({ lessonData }) => {
  const [searchInput, setSearchInput] = React.useState(undefined);

  return (
    <div>
      <body>
        <HomePageHeader
          searchInput={searchInput}
          setSearchInput={setSearchInput}
        />
        <RecipeCard searchInput={searchInput} lessonData={lessonData} />
      </body>
      <Footer />
    </div>
  );
};

export default Home;
