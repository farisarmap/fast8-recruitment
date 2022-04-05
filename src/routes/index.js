const router = require("express").Router()
const CompanyController = require("../controllers/CompanyController")
const EmployeeController = require("../controllers/EmployeeController")
const FibonacciController = require("../controllers/FibonacciController")
const CombinationController = require("../controllers/CombinationController")
const CountryController = require("../controllers/CountryController")

// Fibonacci
router.post("/api/fibonacci", FibonacciController.fibonacci)

// Combination
router.post("/api/combination", CombinationController.combination)

// Company routes
router.post("/api/companies", CompanyController.addCompany)
router.get("/api/companies", CompanyController.getCompany)
router.put("/api/companies/:id/set_active", CompanyController.updateCompany)

// Employee routes
router.post(
	"/api/companies/:company_id/employees",
	EmployeeController.addEmployee
)
router.get(
	"/api/companies/:id/employees",
	EmployeeController.getEmployeesByCompany
)
router.get("/api/employees/:id", EmployeeController.getEmployeeById)
router.put(
	"/api/companies/:company_id/employees/:employee_id",
	EmployeeController.editEmployee
)
router.delete("/api/employees/:id", EmployeeController.deleteEmployee)

// Get data from public API
router.get("/api/countries", CountryController.getCountry)

module.exports = router
