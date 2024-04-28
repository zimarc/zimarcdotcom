import Image from 'next/image';
import image1 from './img/Tree-DwellOnDesign-01.svg';


const project= () => {
  const images = [image1];

  return (
    <div style={{ padding: '10px' }}>
      <h1 className='uppercase'>tree</h1>

      {/* Loop through all images and render each one */}
      {images.map((image, index) => (
        <div key={index} style={{ padding: '10px' }}>
          <Image
            src={image}
            alt={`Image ${index + 1}`}
          
          />
        </div>
      ))}
    </div>
  );
};

export default project;