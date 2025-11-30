'use client';

import { Card, Typography, Box } from "@mui/material";
import Link from "next/link";
import SvgIcon from "@mui/material/SvgIcon";
import React from "react";

type Props = {
  title: string;
  description: string;
  icon: React.ComponentType<React.ComponentProps<typeof SvgIcon>>;
  href?: string;
  color: string;
};

export default function NavCard({
  title,
  description,
  icon: Icon,
  href,
  color
}: Props) {
  const muiColor =
    color.split(".")[0] as
      | "primary"
      | "secondary"
      | "success"
      | "error"
      | "warning"
      | "info";

  const content = (
    <Card
      variant="outlined"
      sx={{
        p: 3,
        borderRadius: 2,
        cursor: "pointer",
        height: "100%",
        backgroundColor: 'white',
        border: '1px solid',
        borderColor: 'grey.200',
        boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)',
        transition: 'all 0.2s ease-in-out',
        "&:hover": { 
          boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
          borderColor: color,
          transform: 'translateY(-2px)'
        }
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={2}>
        <Typography variant="h6" fontWeight="bold" color="text.primary" sx={{ flex: 1, mr: 2 }}>
          {title}
        </Typography>

        <Box
          sx={{
            width: 48,
            height: 48,
            backgroundColor: `${muiColor}.50`,
            borderRadius: 1.5,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexShrink: 0
          }}
        >
          <Icon sx={{ color: color, fontSize: 28 }} />
        </Box>
      </Box>

      <Typography variant="body2" color="text.secondary" lineHeight={1.6}>
        {description}
      </Typography>
    </Card>
  );

  return href ? (
    <Link href={href} style={{ textDecoration: 'none' }}>
      {content}
    </Link>
  ) : content;
}