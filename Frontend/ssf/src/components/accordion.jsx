import React, { useState } from 'react';
import './accordion.css'; // Import CSS for styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const tiles = [
    {
      title: 'DESIGN',
      content: [
        '2D Floor Plan',
        '3D Elevation Design'
      ]
    },
    {
      title: 'STRUCTURE',
      content: [
        'Basement height: Upto 3 feet from Ground Level Car parking 1.5 feet',
        'Steel: JSW or KAVERI',
        'Aggregates: 20mm & 40mm',
        'Bricks: 9 inch for Exterior Wall & 4.5 inch for Interior Wall',
        'Cement: JSW or VALIMAI',
        'M Sand: Brickwork & Plastering',
        'RCC Design Mix: M20',
        'RCC Framed Structure',
        'Waterproofing: Dr.Fixit',
        'Ceiling Height: clear 10 Feet'
      ]
    },
    {
      title: 'KITCHEN',
      content: [
        'Ceramic Wall Tiles 4 Feet Above Kitchen Slab Upto 45 Per Sqft',
        'Kitchen Sink: Stainless Steel Upto 2500 Rs',
        'Kitchen Granite Slab: 20 mm Thick Upto 100 Rs per Sqft'
      ]
    },
    {
      title: 'BATHROOM',
      content: [
        'Wall Tiles For 7 Feet Upto 45 Rs Per Sqft',
        'Sanitary Ware & CP Fitting',
        'CPVC/PVC: Supreme or Metro',
        'Bathroom Accessories: EWC, Health Faucet, Wash Basin, 2 in 1 Wall Mixer, Overhead Shower',
        'All bathroom fittings are white color & basic model in parryware',
        'PVC WaterProof Doors'
      ]
    },
    {
      title: 'PLUMBING',
      content: [
        'Bathroom – 1 wash basin with tap, 1 shower with wall mixer for hot & cold water, 1 floor mount western closet with health faucet.',
        'Dining – 1 wash basin with tap',
        'Kitchen – Double stainless steel sink with 1 taps. 1 RO point',
        'Service – 1 tap point & water outlet point for washing machine'
      ]
    },
    {
      title: 'DOORS & WINDOWS',
      content: [
        'Main Door: Ready Made Nigerian Teak Door With Teak Wood Frame of 5 Inch by 3 Inch, 38mm Thickness',
        'Internal Door: Flush Door With Laminates Along With Teak Wood Frame of 4 Inch by 3 Inch',
        'Windows: Teak Wood Window',
        'Door sizes:',
        'Main Door – 3.5\'(Width) X 7\'(Height)',
        'Rooms – 3\'(Width) X 7\'(Height)',
        'Bathroom & Balcony – 2.5\'(Width) X 7\'(Height)',
        'Window size – 3\'(Width) X 4\'(Height) (1 window per room)'
      ]
    },
    {
      title: 'PAINTING',
      content: [
        'Interior:',
        '2 coats of Asian/ Birla putty',
        '1 coat of Asian primer and 2 coats of Asian tractor emulsion paint for the walls (light colours)',
        '1 coat of primer and 2 coats of Asian tractor emulsion paint for the ceiling',
        'Exterior:',
        '1 coat of Asian primer',
        '1 coat of white cement',
        '2 coats of Asian ace emulsion paint (light colours)'
      ]
    },
    {
      title: 'FLOORING',
      content: [
        'Living & Dining Flooring: Tiles Upto 50 Rs Per Sqft',
        'Room & Kitchen Flooring: Tiles Upto 50 Rs Per Sqft',
        'Balcony & Open Area Flooring: Tiles Upto 45 Rs Per Sqft',
        'Staircase Flooring: Anti-skid Tiles Upto 45 Rs Per Sqft',
        'Parking Tiles: Anti-skid Tiles Upto 45 Rs Per Sqft'
      ]
    },
    {
      title: 'ELECTRICAL',
      content: [
        'Wires – Kundan',
        'Switches – Fybros',
        'Each Bedroom 1 AC point',
        'Each Floor 1 UPS point',
        'Each Bathroom 1 Heater point'
      ]
    },
    {
      title: 'OTHER INCLUSIVES',
      content: [
        'Overhead Tank: 1000 litres Sintex',
        'MS Staircase Railing',
        'Parapet Wall 3 Feet High and width 9 inches Thick (included if headroom is built)',
        'Roof weathering is included if the build-up area is more than 2000 sft',
        'Lofts & Shelves:',
        '1 Loft in each bedroom, kitchen & pooja room on the shorter side of the wall',
        '1 Shelf in each bedroom, kitchen & pooja room of maximum width 5 feet'
      ]
    },
    {
      title: 'EXTRA CHARGES',
      content: [
        'Compound Wall',
        'Lift',
        'Carpentry & other wooden work',
        'EB Connections & Charges',
        'Govt. approval charges',
        'Water Connections & Charges',
        'Underground water storage Sump Rs 20 Per Litre',
        'Overhead concrete tank Rs 30 per litre',
        'Gates',
        'Elevation Work Extra',
        'Water recycling tank based on the requirement',
        'Additional foundation height',
        'Soil Testing',
        'Structural designing',
        'Electrical/plumbing drawings',
        'Interior 3D view or walkthrough',
        'Outer area development (setback)',
        'Any Sunken flooring will be Additional Cost',
        'Any External Chamber will be Additional Cost'
      ]
    }
  ];

  return (
    <div className="accordion-container">
      {tiles.map((tile, index) => (
        <div key={index} className="accordion-tile">
          <button
            className={`accordion-button ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleAccordion(index)}
          >
            {tile.title}
            <FontAwesomeIcon icon={faPlus} className="accordion-icon" />
          </button>
          <div
            className={`accordion-content ${activeIndex === index ? 'open' : ''}`}
          >
            <ul>
              {tile.content.map((item, subIndex) => (
                <li key={subIndex} className="list-item">
                  {item}
                  <hr className="separator" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
