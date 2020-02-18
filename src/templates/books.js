import React from "react"
import { graphql } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"

import { abilitiesColumns } from "../components/Abilities"
import { adversariesColumns } from "../components/Adversaries"
import { adversariesArmorColumns } from "../components/AdversariesArmor"
import { adversariesGearColumns } from "../components/AdversariesGear"
import { adversariesWeaponsColumns } from "../components/AdversariesWeapons"
import { attachmentsColumns } from "../components/Attachments"
import { armorColumns } from "../components/Armor"
import Dashboard from "../components/Dashboard"
import { creaturesColumns } from "../components/Creatures"
import { creaturesWeaponsColumns } from "../components/CreaturesWeapons"
import { gearColumns } from "../components/Gear"
import { skillsColumns } from "../components/Skills"
import { speciesColumns } from "../components/Species"
import { starshipsColumns } from "../components/Starships"
import Table from "../components/Table"
import { talentsColumns } from "../components/Talents"
import { vehiclesColumns } from "../components/Vehicles"
import { vehicleAttachmentsColumns } from "../components/VehicleAttachments"
import SEO from "../components/SEO"
import { weaponsColumns } from "../components/Weapons"

const useStyles = makeStyles({
  root: {
    minWidth: 375,
  },
  card: {
    minWidth: 375,
    marginBottom: 12,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
})

export default ({ data }) => {
  const book = data.booksYaml

  const classes = useStyles()

  return (
    <Dashboard>
      <SEO title={book.name} />
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.pos} variant="h5" component="h2">
            {book.name}
          </Typography>
        </CardContent>
      </Card>
      <Table
        title="Gear"
        columns={gearColumns}
        data={data.allGearYaml.edges.map(({ node }) => {
          return {
            ...node,
          }
        })}
      />
      <Table
        title="Weapons"
        columns={weaponsColumns}
        data={data.allWeaponsYaml.edges.map(({ node }) => {
          return {
            ...node,
          }
        })}
      />
      <Table
        title="Armor"
        columns={armorColumns}
        data={data.allArmorYaml.edges.map(({ node }) => {
          return {
            ...node,
          }
        })}
      />
      <Table
        title="Attachments"
        columns={attachmentsColumns}
        data={data.allAttachmentsYaml.edges.map(({ node }) => {
          return {
            ...node,
          }
        })}
      />
      <Table
        title="Vehicles"
        columns={vehiclesColumns}
        data={data.allVehiclesYaml.edges.map(({ node }) => {
          return {
            ...node,
          }
        })}
      />
      <Table
        title="Starships"
        columns={starshipsColumns}
        data={data.allStarshipsYaml.edges.map(({ node }) => {
          return {
            ...node,
          }
        })}
      />
      <Table
        title="Vehicle Attachments"
        columns={vehicleAttachmentsColumns}
        data={data.allVehicleAttachmentsYaml.edges.map(({ node }) => {
          return {
            ...node,
          }
        })}
      />
      <Table
        title="Skills"
        columns={skillsColumns}
        data={data.allSkillsYaml.edges.map(({ node }) => {
          return {
            ...node,
          }
        })}
      />
      <Table
        title="Talents"
        columns={talentsColumns}
        data={data.allTalentsYaml.edges.map(({ node }) => {
          return {
            ...node,
          }
        })}
      />
      <Table
        title="Abilities"
        columns={abilitiesColumns}
        data={data.allAbilitiesYaml.edges.map(({ node }) => {
          return {
            ...node,
          }
        })}
      />
      <Table
        title="Species"
        columns={speciesColumns}
        data={data.allSpeciesYaml.edges.map(({ node }) => {
          return {
            ...node,
          }
        })}
      />
      <Table
        title="Adversaries"
        columns={adversariesColumns}
        data={data.allAdversariesYaml.edges.map(({ node }) => {
          return {
            ...node,
          }
        })}
      />
      <Table
        title="Adversaries Gear"
        columns={adversariesGearColumns}
        data={data.allAdversariesGearYaml.edges.map(({ node }) => {
          return {
            ...node,
          }
        })}
      />
      <Table
        title="Adversaries Weapons"
        columns={adversariesWeaponsColumns}
        data={data.allAdversariesWeaponsYaml.edges.map(({ node }) => {
          return {
            ...node,
          }
        })}
      />
      <Table
        title="Adversaries Armor"
        columns={adversariesArmorColumns}
        data={data.allAdversariesArmorYaml.edges.map(({ node }) => {
          return {
            ...node,
          }
        })}
      />
      <Table
        title="Creatures"
        columns={creaturesColumns}
        data={data.allCreaturesYaml.edges.map(({ node }) => {
          return {
            ...node,
          }
        })}
      />
      <Table
        title="Creatures Weapons"
        columns={creaturesWeaponsColumns}
        data={data.allCreaturesWeaponsYaml.edges.map(({ node }) => {
          return {
            ...node,
          }
        })}
      />
    </Dashboard>
  )
}

export const query = graphql`
  query($generatedId: String!, $initials: String!) {
    booksYaml(generatedId: { eq: $generatedId }) {
      name
      system
      initials
      key
    }
    allWeaponsYaml(filter: { index: { glob: $initials } }) {
      edges {
        node {
          name
          skill
          damage
          crit
          range
          encumbrance
          hp
          price
          rarity
          special
          index
          generatedId
        }
      }
    }
    allGearYaml(filter: { index: { glob: $initials } }) {
      edges {
        node {
          name
          price
          rarity
          encumbrance
          index
          generatedId
        }
      }
    }
    allArmorYaml(filter: { index: { glob: $initials } }) {
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
    allAttachmentsYaml(filter: { index: { glob: $initials } }) {
      edges {
        node {
          name
          price
          encumbrance
          hp
          rarity
          index
          generatedId
        }
      }
    }
    allVehiclesYaml(filter: { index: { glob: $initials } }) {
      edges {
        node {
          category
          crew
          encumbrance
          generatedId
          handling
          price
          hp
          index
          manufacturer
          name
          passengers
          rarity
          silhouette
          speed
          weapons
          generatedId
        }
      }
    }
    allStarshipsYaml(filter: { index: { glob: $initials } }) {
      edges {
        node {
          category
          crew
          price
          model
          encumbrance
          navicomputer
          generatedId
          handling
          hp
          index
          manufacturer
          name
          passengers
          rarity
          silhouette
          speed
          weapons
          generatedId
        }
      }
    }
    allVehicleAttachmentsYaml(filter: { index: { glob: $initials } }) {
      edges {
        node {
          name
          price
          hp
          rarity
          index
          generatedId
        }
      }
    }
    allSkillsYaml(filter: { index: { glob: $initials } }) {
      edges {
        node {
          name
          characteristic
          type
          index
          generatedId
        }
      }
    }
    allTalentsYaml(filter: { index: { glob: $initials } }) {
      edges {
        node {
          name
          activation
          ranked
          forceSensitive
          index
          generatedId
        }
      }
    }
    allAbilitiesYaml(filter: { index: { glob: $initials } }) {
      edges {
        node {
          name
          description
          index
          generatedId
        }
      }
    }
    allSpeciesYaml(filter: { index: { glob: $initials } }) {
      edges {
        node {
          name
          player
          index
          generatedId
        }
      }
    }
    allAdversariesYaml(filter: { index: { glob: $initials } }) {
      edges {
        node {
          name
          level
          skills
          talents
          abilities
          equipment
          index
          generatedId
        }
      }
    }
    allAdversariesGearYaml(filter: { index: { glob: $initials } }) {
      edges {
        node {
          name
          encumbrance
          index
          generatedId
        }
      }
    }
    allAdversariesWeaponsYaml(filter: { index: { glob: $initials } }) {
      edges {
        node {
          name
          skill
          damage
          crit
          range
          special
          index
          generatedId
        }
      }
    }
    allAdversariesArmorYaml(filter: { index: { glob: $initials } }) {
      edges {
        node {
          name
          defense
          soak
          encumbrance
          hp
          index
          generatedId
        }
      }
    }
    allCreaturesYaml(filter: { index: { glob: $initials } }) {
      edges {
        node {
          name
          level
          skills
          talents
          abilities
          equipment
          index
          generatedId
        }
      }
    }
    allCreaturesWeaponsYaml(filter: { index: { glob: $initials } }) {
      edges {
        node {
          name
          skill
          damage
          crit
          range
          special
          index
          generatedId
        }
      }
    }
  }
`