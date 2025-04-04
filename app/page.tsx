import getCats from "@/lib/getCats";
import CatGallery from "@/components/CatGallery";
import Nav from "@/components/Nav";
import "./globals.css";


export default async function Home() {
  let cats = [];
  try {
    cats = await getCats();
  } catch (error) {
    return (
      <div className = "page-wrapper">
        <Nav />
        <h1> Cat Gallery </h1>
        <div className= "error-div">
          <p> Error: {(error as Error).message} </p>
          <p> Please try again later</p>
        </div>
      </div>
    );
  }
  return (
    <div className = "page-wrapper">
      <Nav />
      <h1> Cat Gallery </h1>
      <CatGallery cats={cats} />
    </div>
  );
}
