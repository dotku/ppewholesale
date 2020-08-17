CREATE VIEW organization_view as (
    Select 
        organization_type_relation.organization_id, 
        organization_type_relation.organization_type_id, 
        organization.name as organization_name, 
        organization_type.name as organization_type_nameorganization_view
    from organization_type_relation 
        left outer join organization on 
            organization_type_relation.organization_id = organization.id 
        left outer join organization_type on 
            organization_type_relation.organization_type_id = organization_type.id
)