import { graphql } from "gatsby"
import React from "react"

import { armorColumns } from "../components/Armor"
import Dashboard from "../components/Dashboard"
import SEO from "../components/SEO"
import Table from "../components/Table"

export default function Armor({ data }) {
  return (
    <Dashboard>
      <SEO title="Armor" />
      <Table
        title="Armor"
        columns={armorColumns}
        data={data.allArmorYaml.edges.map(({ node }) => {
          return {
            ...node,
          }
        })}
      />
    </Dashboard>
  )
}

export const query = graphql`
  query ArmorPageQuery {
    allArmorYaml {
      edges {
        node {
          name
          defense
          soak
          price
          encumbrance
          hp
          rarity
          index
          generatedId
        }
      }
    }
  }
`