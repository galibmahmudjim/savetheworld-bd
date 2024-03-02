import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
const PlasticComprises = () => {
      return (
            <div className="w-full h-full text-[20px] more">
                  <ul className="ulHome">
                        <li className="checkmarks">
                              <HiOutlineClipboardDocumentList color="#3565BE" size={25} />
                              <p className="w-[90%]">Globally 40% of plastic waste is burnt and produces air pollutants.</p>
                        </li>
                        <li className="checkmarks">
                              <HiOutlineClipboardDocumentList color="#3565BE" size={25} />
                              <p className="w-[90%]">
                                    We even breathe plastic due to poor waste management and incinerate unsegregated plastic waste.
                              </p>
                        </li>
                  </ul>
            </div>
      )
}

export default PlasticComprises;