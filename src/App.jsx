import { useEffect, useContext } from 'react'

import './App.css'
import AddressTiles from './components/addressTiles'
import { Addresslist } from './context/Context'
import AddressSection from './components/addressSectionTiles'



function App() {

  const addressData = [
    {
      "title": "Address",
      "Address": '5000 Avemue of the Stars',
      "Address1": '',
      "City": 'Kissimmee ',
      "State": 'FL',
      "ZipCode": '34746'
    },
    {
      "title": "Industry",
      "value": 'Hotel & Motel'
    },
    {
      "title": "Number of Locations",
      "value": '33'
    },
    {
      "title": "Enrolled Employees",
      "value": '193'
    },
    {
      "title": "Annual Sales",
      "value": '5000000'
    },
    {
      "title": "Experience Mod",
      "value": '1.6'
    },
  ];



  const { addressDatalist, setaddressDatalist } = useContext(Addresslist);

  useEffect(() => {
    setaddressDatalist(addressData);
 
  }, [])



  const list = addressDatalist.map((list) => {

    if (list.title === "Address") {
      return <AddressSection key={list.title} content={list} addressDatalist={addressDatalist} setaddressDatalist={setaddressDatalist}/>
    } else {
      return <AddressTiles key={list.title} content={list} addressDatalist={addressDatalist} setaddressDatalist={setaddressDatalist} />
    }
  })
  return (
    <>
      <div>
        {list}
      </div>
    </>
  )
}

export default App
