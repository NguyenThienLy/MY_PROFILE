
const path = require('path');
const {
  readFilePromise,
  writeFilePromise,
} = require('./services/file');

const insertProject = async (project) => {
  const projects = JSON.parse(await readFilePromise(path.join(__dirname, './docs/data/projects.json')));

  projects.push(project);

  writeFilePromise('./docs/data/projects.json', JSON.stringify(projects)).then(res => {
    return project;
  }).catch(err => {
    throw Error("insert fail!");
  })
};

const insertOtherProject = async (otherProject) => {
  const otherProjects = JSON.parse(await readFilePromise(path.join(__dirname, './docs/data/otherProjects.json')));
  otherProjects.push(otherProject);

  writeFilePromise('./docs/data/projects.json', JSON.stringify(otherProjects)).then(res => {
    return otherProject;
  }).catch(err => {
    throw Error("insert fail!");
  })
};

module.exports = {
  insertProject,
  insertOtherProject
}