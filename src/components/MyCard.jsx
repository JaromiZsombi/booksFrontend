import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

export const MyCard=({title, author, rating, cover, description, category})=> {
  return (
    <div>
        <p></p>
        <Card shadow="sm" padding="lg" radius="md" withBorder style={{width:"300px"}}>
      <Card.Section>
        <Image
          fit='contain'
          src={cover}
          w="100%"
          mah={220}
          alt={title}
          fallbackSrc='https://placehold.co/600x400?text=Placeholder'
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{title}</Text>
        <Badge color="pink">Rating: {rating}</Badge>
      </Group>

      <Text size="sm" c="dimmed">
        {description}
      </Text>

      <Button color="blue" fullWidth mt="md" radius="md">
        Book classic tour now
      </Button>
    </Card>
    </div>
    
  );
}