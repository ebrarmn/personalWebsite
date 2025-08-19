import React, { useState } from 'react';

const categories: string[] = ['Tümü', 'Web', 'Mobil', 'Diğer'];

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Tümü');
  const filteredProjects = []; // örnek, kendi projelerini ekle

  return (
    <div>
      {categories.map((category: string) => (
        <button key={category} onClick={() => setSelectedCategory(category)}>
          {category}
        </button>
      ))}

      {filteredProjects.map((project) => (
        <div key={project.id}>
          {project.technologies.map((tech: string) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Projects;