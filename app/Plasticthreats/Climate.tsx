
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
const Climate = () => {
      return (
            <div className="w-full h-full text-[20px] more">
                  <h4 className="subsubsection">        Impact of Plastic on Our Planet
                  </h4>

                  <ul className="ulHome">
                        <li className="checkmarks">
                              <HiOutlineClipboardDocumentList color="#3565BE" size={25} />
                              <p className="w-[90%]">Plastic production accounts for 4-8% of annual global oil consumption.</p>
                        </li>
                        <li className="checkmarks">
                              <HiOutlineClipboardDocumentList color="#3565BE" size={25} />
                              <p className="w-[90%]">Open-air burning of plastics releases toxic black carbon, contributing up to 5,000 times more to global warming than carbon dioxide.</p>
                        </li>
                  </ul>

            </div>
      )
}

export default Climate;