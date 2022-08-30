const form = document.querySelector('#communityActivities');

const wbFieldset = document.querySelector('#workbench');
const wbActivityContainer = document.querySelector('.workbench__activity');
const altvActivityContainer = document.querySelector('.alternative__activity');

wbFieldset.addEventListener('click', (e) => {
  if (e.target.classList.contains('form-check-input')) {
    let formData = new FormData(form);
    let isWorkbench = formData.get('workbench');
    if (isWorkbench === 'isWorkbench') {
      wbActivityContainer.classList.add('active');
      altvActivityContainer.classList.remove('active');
    } else {
      wbActivityContainer.classList.remove('active');
      altvActivityContainer.classList.add('active');
    }
  }
});