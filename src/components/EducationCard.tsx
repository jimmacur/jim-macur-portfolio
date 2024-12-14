import React from 'react';

interface EducationCardProps {
  logo: string;
  institution: string;
  degree: string;
  description: string;
  dates?: string;
  highlights?: string[];
}

const EducationCard: React.FC<EducationCardProps> = ({ logo, institution, degree, description, dates, highlights }) => {
  return (
    <div className='flex items-start bg-white shadow-md p-6 rounded-lg mb-4'>
      <img
        src={logo}
        alt={`${institution} logo`}
        className='w-16 h-16 object-contain rounded-lg mr-6'
      />
      <div>
        <h3 className='text-lg font-extrabold'>{institution}</h3>
        <p className='text-gray-600 font-bold'>{degree}</p>
        <p className='text-gray-600'>{dates}</p>
        <p className='text-gray-800'>{description}</p>
        {highlights && (
          <ul className="mt-2 list-disc pl-5 text-gray-600">
            {highlights.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default EducationCard;