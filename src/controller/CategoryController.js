import Category from "../model/Category.js";

class CategoryController {
    static listCategories = (req, res) => {
        Category.find((err, categories) => {
            if(err) {
                res.status(400).send({ message: `Categories not found ${err}`});
            } else {
                res.status(200).json(categories);
            }
        })
    } 

    static listCategoriesById = (req, res) => {
        const { id } = req.params;
        Category.findById(id, (err, caterory) => {
            if(err) {
                res.status(500).send({ message: `Category not found ${err}` });
            } else {
                res.status(200).json(caterory);
            }
        })
    }

    static createCategories = (req, res) => {
        const category = new Category(req.body);
        category.save(err => {
            if(err) {
                res.status(500).send(`Cannot create a category ${err}`);
            } else {
                res.status(200).send(category.toJSON());
            }
        });
    }

    static updateCategoriesById = (req, res) => {
        const { id } = req.params;
        Category.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if(err) {
                res.status(500).send({message: `Cannot update ${err}`});
            } else {
                res.status(200).send({message: `Collection updated`});
            }
        })
    }

    static removeCategoriesById = (req, res) => {
        const { id } = req.params;
        Category.deleteOne({ id: id }, (err) => {
            if(err) {
                res.status(500).send(`Cannot delete category: ${err}`);
            } else {
                res.status(200).send(`Category deleted`);
            }
        })
    }
}

export default CategoryController;