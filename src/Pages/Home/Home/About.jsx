import { useEffect, useState } from "react";
import usePortfolioContext from "../../../Hooks/usePortfolioContext";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const About = () => {
  const { isDark } = usePortfolioContext();
  const [personality, setPerSonality] = useState([]);
  useEffect(() => {
    fetch("/personality.json")
      .then(res => res.json())
      .then(data => setPerSonality(data));
  }, []);
  return (
    <div className="cs-container">
      <div
        className={`bg-base-200/20 backdrop-blur-[10px] p-3 md:p-10 ring-1 ${
          isDark ? "ring-slate-900" : "ring-slate-300"
        } rounded-lg`}
        data-aos="fade-up"
      >
        <SectionTitle title="About me"></SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-5">
          <div>
            <p className="font-inter text-justify">
              Hi,
              <br />
              Thanks for visiting my portfolio. My Name is Md. Abir mahmud. I am
              from satkhira, Bangladesh. Currently i am pursuing my Bachelor
              degree. At the same time, i am a skilled react developer. I have
              completed so many fullstack projects with react.js and node.js. I
              hardly confident on my skills and ready to get hired.
            </p>
            <p className="mt-10">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ut
              similique natus odit. Odit nulla beatae nostrum eaque. Laudantium,
              numquam tenetur provident, illum aliquam dolores fugit,
              perferendis at repudiandae quis voluptas nemo. Commodi vitae saepe
              rerum optio ipsum impedit animi repellendus voluptate aut!
              Blanditiis explicabo temporibus asperiores, recusandae ullam
              repellat hic veritatis distinctio sed eos porro quos in? Optio
              tempora iusto amet itaque cum molestias, inventore veniam numquam
              odit veritatis tenetur aperiam voluptates ratione dolore voluptas
              quidem est nulla exercitationem? Laborum dolorum nostrum tempora
              nobis nesciunt commodi suscipit aliquam, aperiam expedita eligendi
              deleniti dignissimos magni ducimus eveniet saepe fuga itaque!
            </p>
          </div>
          <div>
            <div className="flex flex-wrap gap-10 justify-center md:justify-end">
              {personality.map(item => (
                <div
                  key={item.id}
                  className="text-center w-56 h-56 ring-1 ring-slate-800 p-10 bg-slate-600/20 backdrop-blur-[10px] rounded-lg"
                  data-aos="fade-up"
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-28 mx-auto"
                  />
                  <h2 className="text-xl font-inter font-semibold mt-2">
                    {item.name}
                  </h2>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <p className="mt-10">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, aliquid
        alias. Unde, ipsam sapiente perferendis dolorum eius quisquam quo
        repudiandae consequatur officiis ullam incidunt odio quae rem
        voluptatibus suscipit rerum? Reiciendis mollitia temporibus laboriosam
        autem? Suscipit fuga, corrupti cupiditate earum a iusto veritatis dolor
        esse facilis cum delectus distinctio veniam vel eos. Magnam soluta sequi
        dolore non molestias veritatis atque eveniet, incidunt eaque sed iure
        obcaecati mollitia ducimus, autem quaerat tempora voluptates velit?
        Iusto eveniet facilis totam dicta assumenda voluptates commodi optio
        ipsam ab repellendus voluptate perferendis sit quidem, eligendi veniam
        magni dolor eos ex, quasi a. Placeat, commodi temporibus.
      </p>
    </div>
  );
};

export default About;
