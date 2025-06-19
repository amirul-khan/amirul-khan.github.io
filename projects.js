// projects.js
fetch('projects.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('project-list');
    data.forEach(project => {
      const item = document.createElement('div');
      item.className = 'project-card';
      item.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <p><strong>Tech:</strong> ${project.tech.join(', ')}</p>
      `;
      container.appendChild(item);
    });
  });
