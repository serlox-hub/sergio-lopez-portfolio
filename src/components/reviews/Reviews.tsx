import { getPosts } from "@/utils/utils";
import { Column, Grid, Text } from "@once-ui-system/core";
import { ReviewCard, ReviewRequest } from "@/components";
import { reviews } from "@/resources";

interface ReviewsProps {
  range?: [number, number?];
}

export function Reviews({ range }: ReviewsProps) {
  let allReviews = getPosts(["src", "app", "reviews", "reviews"]);

  const sortedReviews = allReviews.sort(
    (a, b) =>
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
  );

  const displayedReviews = range
    ? sortedReviews.slice(range[0] - 1, range[1] ?? sortedReviews.length)
    : sortedReviews;

  return (
    <Column id="reviews" gap="l">
      <Column gap="xs">
        <ReviewRequest />
        <Text
          variant="body-default-xs"
          onBackground="neutral-weak"
          style={{ fontStyle: "italic" }}
        >
          {reviews.request.footer}
        </Text>
      </Column>
      <Grid
        fillWidth
        columns="2"
        mobileColumns="1"
        gap="xl"
        marginBottom="40"
        paddingX="l"
      >
        {displayedReviews.map((post, index) => (
          <ReviewCard
            key={post.slug}
            title={post.metadata.title}
            relationship={post.metadata.relationship}
            publishedAt={post.metadata.publishedAt}
            content={post.content}
          />
        ))}
      </Grid>
    </Column>
  );
}
