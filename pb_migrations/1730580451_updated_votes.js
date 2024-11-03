/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("camt286re9t0ffm")

  // remove
  collection.schema.removeField("wdduvrlv")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zeoamybh",
    "name": "votes",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("camt286re9t0ffm")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wdduvrlv",
    "name": "votes",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("zeoamybh")

  return dao.saveCollection(collection)
})
