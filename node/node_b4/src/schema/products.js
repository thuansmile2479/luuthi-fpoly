import joi from "joi";

export const prodcutSchema = joi.object({
    name: joi.string().required(),
    price: joi.number().required(),
    desc: joi.string().required(),
})