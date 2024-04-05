import { defineType , defineField } from "sanity";

export const projectSchema = defineType({
    name:'project',
    title: 'Project',
    type: 'document',
    fields : [
        defineField({
            name: 'thumbnail',
            type: 'image',
            title: "Thumbnail",
            options: {
                hotspot: true, 
            },
        }),
        defineField({
            name: 'projectLanguage',
            title: 'Project Language',
            type: 'string',
        }),
        defineField({
            name: 'projectTitle',
            type: 'string',
            title: 'Title',
        }),
        defineField({
            name: 'description',
            type : 'string',
            title:'Description'
        }),
         defineField({
            name: 'date',
            type: 'datetime',
            title: 'Published Date',
        }),
        defineField({
            name: 'websiteurl',
            title: "Website URL",
            type: 'string',
        })
    ]
})