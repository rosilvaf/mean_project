const { Router }= require ('express');
const router= Router();
const employeesCtrl = require ('../controllers/empleoyees.controller');
router.get('/', employeesCtrl.getEmployees);
router.post('/', employeesCtrl.createEmployee);
router.get('/:id', employeesCtrl.getEmployee);
router.delete('/:id', employeesCtrl.deleteEmployee);
router.put('/:id', employeesCtrl.deleteEmployee);

module.exports= router;