import UrlTile from './UrlTile';

const urls = [
      {
            "id": 1,
            "title": "Plastic pollution Where is the solution? (dhakatribune.com) ",
            "url": "https://www.dhakatribune.com/bangladesh/312844/plastic-pollution-where-is-the-solution",
            "thumbnail": "//ecdn.dhakatribune.net/contents/cache/images/1100x618x1/uploads/dten/2023/06/04/plastic-mehedi.jpeg"
      },
      {
            "id": 2,
            "title": "The time to beat plastic pollution is now or never | Daily Star (thedailystar.net)",
            "url": "//tds-images.thedailystar.net/sites/default/files/styles/big_202/public/images/2023/06/04/whatsapp_image_2023-06-04_at_2.50.48_pm_4.jpeg",
            "thumbnail": "//tds-images.thedailystar.net/sites/default/files/styles/big_202/public/images/2023/06/04/whatsapp_image_2023-06-04_at_2.50.48_pm_4.jpeg"

      },
      {
            "id": 3,
            "title": "Bangladesh recycles only 36% plastic waste: experts | The Daily Star",
            "url": "https://www.thedailystar.net/business/news/bangladesh-recycles-only-36-plastic-waste-experts-3212711",
            "thumbnail": "https://tds-images.thedailystar.net/sites/default/files/styles/very_big_201/public/images/2023/01/04/plastic_waste_2.jpg"

      },
      {
            "id": 4,
            "title": "Plastic pollution goes unabated (newagebd.net)",
            "url": "https://www.newagebd.net/article/203079/plastic-pollution-goes-unabated-in-bangladesh#:~:text=A%20World%20Bank%20report%20said,bags%2C%20packs%2C%20and%20wrappers.",
            "thumbnail": "https://www.newagebd.com/files/records/news/202306/203079_131.jpg"
      },
      {
            "id": 5,
            "title": "Example Title 5",
            "url": "https://www.dhakatribune.com/bangladesh/305930/plastic-waste-needs-sustainable-management",
            "thumbnail": "https://via.placeholder.com/150"
      },
      {
            "id": 6,
            "title": "Example Title 5",
            "url": "https://www.thedailystar.net/opinion/views/closer-look/news/private-sector-plastic-killing-our-environment-3118081",
            "thumbnail": "https://via.placeholder.com/150"
      },
      {
            "id": 7,
            "title": "Example Title 5",
            "url": "https://www.youtube.com/watch?v=ggh0Ptk3VGE",
            "thumbnail": "https://via.placeholder.com/150"
      },
      {
            "id": 8,
            "title": "Example Title 5",
            "url": "https://www.youtube.com/watch?v=HQTUWK7CM-Y",
            "thumbnail": "https://via.placeholder.com/150"
      },
      {
            "id": 9,
            "title": "Example Title 5",
            "url": "https://www.youtube.com/watch?v=jyLjUEOcLgg",
            "thumbnail": "https://via.placeholder.com/150"
      },
      {
            "id": 10,
            "title": "Example Title 5",
            "url": "https://www.undp.org/blog/beginning-end-plastics-pollution",
            "thumbnail": "https://via.placeholder.com/150"
      },
      {
            "id": 11,
            "title": "Example Title 5",
            "url": "https://www.unep.org/interactives/beat-plastic-pollution/?gad_source=1&gclid=CjwKCAiA29auBhBxEiwAnKcSqlMl7kqB2MepTIbFFCVMeTeSopglU-mDw5kPGiZtr3kCD7AZQLKynhoCCkQQAvD_BwE",
            "thumbnail": "https://via.placeholder.com/150"
      },
      {
            "id": 12,
            "title": "Example Title 5",
            "url": "https://www.bbc.com/news/topics/c6lpgw300llt",
            "thumbnail": "https://via.placeholder.com/150"
      },
      {
            "id": 13,
            "title": "Example Title 5",
            "url": "https://edition.cnn.com/2023/03/08/world/ocean-plastic-pollution-climate-intl/index.html",
            "thumbnail": "https://via.placeholder.com/150"

      }
      ,
      {
            "id": 13,
            "title": "Example Title 5",
            "url": "https://www.theguardian.com/environment/plastic",
            "thumbnail": "https://via.placeholder.com/150"

      }
      ,
      {
            "id": 13,
            "title": "Example Title 5",
            "url": "https://www.worldbank.org/en/news/feature/2021/12/23/meeting-bangladesh-s-plastic-challenge-through-a-multisectoral-approach",
            "thumbnail": "https://via.placeholder.com/150"

      }
      ,
      {
            "id": 13,
            "title": "Example Title 5",
            "url": "https://www.youtube.com/watch?v=Yomf5pBN8dY",
            "thumbnail": "https://via.placeholder.com/150"

      }
      ,


]
const Nat = () => {


      return (
            <div>
                  <h1>News coverage of plastic pollution
                        National news:
                  </h1>
                  <div className="url-list">
                        {urls.map((item) => (
                              <div key={item.id} className="url-item w-full mt-[5%]">
                                    <a href={item.url} target="_blank" rel="noopener noreferrer" className='no-underline w-full block text-left'>
                                          <img src={item.thumbnail} alt={item.title} className="h-[50%] w-full " />
                                          <p className='no-underline text-xl text-black decorato text-justify text-left w-full '>{item.title}</p>
                                    </a>
                              </div>
                        ))}
                  </div>
                  <style jsx>{`
                .url-list {
                  display: flex;
                  flex-wrap: wrap;
                  gap: 5%;
                }
                .url-item {
                  width: 20%;
                  height: 300px;
                  text-align: center;
                  border: 1px solid #ccc;
                  padding: 10px;
                  border-radius: 10px;
                  transition: transform 0.2s;
                }
                .url-item:hover {
                  transform: scale(1.05);
                }
                .thumbnail {
                  width: 100%;
                  height: auto;
                  border-radius: 5px;
                }
              `}</style>
            </div>
      );
}
export default Nat;