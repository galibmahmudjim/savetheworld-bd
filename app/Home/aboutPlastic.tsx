
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
const AboutPlastic = () => {
      return (
            <div className="w-full h-full text-[20px] more">
                  <h4 className="subsubsection"> Plastic is mainly a petroleum-derived non-biodegradable polymer. Today modern life is almost impossible without plastics
                  </h4>
                  <ul className="ulHome">
                        <li className="checkmark">  <HiOutlineClipboardDocumentList color="#3565BE" size={25} />
                              <p className="w-[90%]">It is estimated that around 343 million tonnes (MT) of plastic is produced every year.</p>
                        </li>
                        <li className="checkmark">  <HiOutlineClipboardDocumentList color="#3565BE" size={25} />
                              <p className="w-[90%]">Plastic Wastes (PW) are produced by massive manufacturing, processing, and packaging industries.</p></li>
                        <li className="checkmark">  <HiOutlineClipboardDocumentList color="#3565BE" size={25} />
                              <p className="w-[90%]">More than 20 billion plastic bottles are tossed on earth.</p>
                        </li>
                        <li className="checkmark">  <HiOutlineClipboardDocumentList color="#3565BE" size={25} /><p className="w-[90%]">Only approximately 10% of total world plastic is recycled.</p></li>
                        <li className="checkmark">  <HiOutlineClipboardDocumentList color="#3565BE" size={25} /><p className="w-[90%]">Plastic visibility is increasing due to plastic accumulation and its harmful influence on the environment and human health.</p>
                        </li>
                  </ul>
            </div>
      )
}

export default AboutPlastic;