import MapComponent from '../components/MapComponent';
import { useState } from 'react';

const OurMapContainer = ({waypointData, setPostalDistrict}) => {
    const [selectedDistrict, setSelectedDistrict] = useState('HD1');

    const handleDistrictChange = (event) => {
    const district = event.target.value;
    setSelectedDistrict(district);
    setPostalDistrict(district);
  };

    return (
        <>
            <div>
      <select value={selectedDistrict} onChange={handleDistrictChange}>
        <option value="HD1">HD1</option>
        <option value="HD2">HD2</option>
        <option value="HD3">HD3</option>
        <option value="HD4">HD4</option>
        <option value="HD5">HD5</option>
        <option value="HD6">HD6</option>
        <option value="HD7">HD7</option>
        <option value="HD8">HD8</option>
        <option value="HD9">HD9</option>
        {/* Add more options as needed */}
      </select>
      <MapComponent waypoints={waypointData} />
    </div>
        </>
    )
}

export default OurMapContainer;