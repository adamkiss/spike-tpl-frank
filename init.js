exports.configure = [
  {
    name: 'name',
    message: 'What is the name of your project?'
  }, {
    name: 'description',
    message: 'Describe your project'
  }, {
    name: 'author',
    message: 'Author: What is your name?'
  }, {
    name: 'server',
    message: 'Where will you rsync?'
  }
]

exports.after = (util, config) => {
  
}