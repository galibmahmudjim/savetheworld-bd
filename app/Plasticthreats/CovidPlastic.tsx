
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
const CovidPlastic = () => {
      return (
            <div className="w-full h-full text-[20px] more">
                  <h4 className="subsubsection">        Impact of Plastic on Our Planet
                  </h4>

                  <ul className="ulHome">
                        <li className="checkmarks">
                              <HiOutlineClipboardDocumentList color="#3565BE" size={25} />
                              <p className="w-[90%]">Over 10,000 chemicals are used in plastic production, including 2,400 potentially toxic.</p>
                        </li>
                        <li className="checkmarks">
                              <HiOutlineClipboardDocumentList color="#3565BE" size={25} />
                              <p className="w-[90%]">Hazardous chemicals consumed via plastic packaging remain in our bodies.
                              </p>
                        </li>
                        <li className="checkmarks">
                              <HiOutlineClipboardDocumentList color="#3565BE" size={25} />
                              <p className="w-[90%]">Scientists have found microplastics in 114 marine species, and around one-third of these end up on our plates.

                              </p>
                        </li>
                        <li className="checkmarks">
                              <HiOutlineClipboardDocumentList color="#3565BE" size={25} />
                              <p className="w-[90%]">  The microplastics entering the human body via direct exposure through ingestion or inhalation can lead to an array of health problems including cancer, cardiovascular diseases, inflammatory bowel disease, diabetes, rheumatoid arthritis, chronic inflammation, autoimmune conditions, neurodegenerative diseases, and stroke.

                              </p>
                        </li>



                  </ul>

            </div>
      )
}

export default CovidPlastic;